import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import Cirrus from '../public/logos/payments/cirrus.svg'
// import Maestro from '../public/logos/payments/maestro.svg'
// import Mastercard from '../public/logos/payments/mastercard.svg'
// import PayPal from '../public/logos/payments/paypal.svg'
// import Sofort from '../public/logos/payments/sofort.svg'
// import Visa from '../public/logos/payments/visa.svg'
import CartItemCard from './CartItemCard'
import ArrowLeft from '../public/icons/arrow-left--dark.svg'
import CartContext from '../contexts/CartContext';
import StripeCheckout from 'react-stripe-checkout';
import { useRouter } from "next/router"

export default function CartDetails ({ setUser, user, handlePurchaseSuccessful }) {
    const [cart, setCart] = useContext(CartContext);
    const router = useRouter()
    const [submitted, setSubmitted] = useState(false);

    let total_cart_items = 0
    let total = 0
    const discountPercentage = 0.08; 

    const updateCartItem = (item) => {
        setCart(cart.map(i => i.id === item.id ? item : i));
    }

    const handleDeleteData = (id) => {
        const updatedCart = cart.filter((item) => item.id != id)
        setCart(updatedCart)
    }

    const createCartItems = cart?.map((cartItem) => {
        total_cart_items += 1
        total += cartItem.lease.price
        return <CartItemCard
            key={cartItem.id}
            cartItem={cartItem}
            updateCartItem={updateCartItem}
            handleDeleteData={handleDeleteData}
        />
    });

    useEffect(() => {
        if (!cart) {
            return;
        }
    }, [cart]);

    const handlePurchase = () => {
        fetch("/api/orders/purchase", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
                body: JSON.stringify({
                cart_id: cart.id
                })
        })
        .then(response => {
            if (response.ok) {
            setCart();
            response.json().then(data => {
                const updatedUser = { ...user, purchased: [...user.purchased, data] };
                setUser(updatedUser);
                handlePurchaseSuccessful();
                console.log("Purchase successful");
            });
            } else {
            throw new Error("Failed to purchase");
            }
        })
        .catch(error => {
            console.error("Error while purchasing:", error);
        });
    };

    const discountedTotal = user.email === "Guest" ? total : total * (1 - discountPercentage);

    const onToken = (token) => {

    const discount = user.email !== 'Guest' ? 0.05 : 0;
    const discountedTotal = total * (1 - discount);

        const charge = {
            token: token.id,
            };
            const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ charge: charge, price: discountedTotal * 100 }),
            };
            fetch("/api/charges", config)
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                if (response.status === "succeeded") {
                console.log("Token retrieved successfully.");
                handlePurchase();
                } else {
                console.log("Token retrieval failed.");
                }
            })
            .catch((error) => {
                console.error("Error while retrieving token:", error);
            });
        };

    const signed = "You're currently not signed in."
    const make = " You'll need to make an "
    const dis = "Thanks for signing up. Here's a discount."

    return (
        <div className="grid grid-cols-2 mt-20 ml-32 pt-20 mb-12">
            <div>
                <h1 className="font-bold text-4xl mt-14">Shopping Cart</h1>
                <Link href="/instrumentals" className='flex items-center mt-5 -ml-4 cursor-pointer '>
                    <Image src={ArrowLeft} alt="Arrow Left" width="48" height="48"/>
                    <p className='-ml-2 font-medium'>Back</p>
                </Link>
                <div className='mt-5 divide-y'>
                    {createCartItems}
                </div>
            </div>
            <div className="bg-stone-100 h-span">
                <div className="grid grid-row-1 divide-y ml-20 mr-20 max-w-[600px]">
                    <h1 className="font-bold text-4xl mb-10 mt-14">Order Summary</h1>
                    <div className=''>
                        <button className='text-base'>{user?.email == "Guest" ? "Sign Up for a discount" : null}</button>
                        <form></form>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td className="pt-5 font-medium">
                                    Subtotal <span>({total_cart_items} product{total_cart_items > 1 ? "s" : null})</span>
                                </td>
                                <td className='pt-5 font-medium text-right'>
                                <div>
                                    <span>Total: ${total.toFixed(2)}</span>
                                    {user?.email == "Guest" ? null : (<div><p>{dis}</p>
                                        <span>
                                            Discounted total: ${discountedTotal.toFixed(2)}
                                        </span>
                                    </div>)}
                                </div>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-base font-light pb-2'>Taxes</td>
                                <td className='text-sm font-normal italic pb-2 text-right'>taxes will be calculated at checkout</td>
                            </tr>
                            <tr className='border-b'>
                                <td className='text-base font-bold pb-10'>Total</td>
                                <td className='text-base font-bold pb-10 text-right'><span>$ {discountedTotal.toFixed(2)}</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='items-center text-center mt-2'>
                        {/* <button onClick={handlePurchase}
                            className='bg-black text-white rounded-full text-sm m-2 py-3 px-64 mb-12 mt-4'
                        >
                            Success Test
                        </button> */}
                        <div className="mb-8 p-4">
                        <StripeCheckout
                            token={onToken}
                            stripeKey={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
                            className="checkout"
                        />
                        </div>
                        <div className="mb-8">
                            {user.email == "Guest" ? <><h1>{signed}</h1><h1>{make}<Link href="/login" className="underline">account</Link> to save your cart and purchases. </h1></> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}