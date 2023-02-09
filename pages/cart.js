import React, { useContext } from "react";
import Link from "next/link";
import ArrowLeft from "../public/icons/arrow-left--dark.svg"
import Image from "next/image";
import CartDetails from "../components/CartDetails"
import CartContext from "../contexts/CartContext"
import UserContext from "../contexts/UserContext"

export default function Cart() {
    const [cart, setCart] = useContext(CartContext)
    const [user, setUser] = useContext(UserContext);
        console.log(user);

    const displayEmptyCartMsg =
        <div className="mt-32 w-screen">
            <div className="ml-32">
                <h1 className="font-bold text-4xl mt-5">Shopping Cart</h1>
                <Link href="/instrumentals" className='flex items-center mt-5 -ml-4 cursor-pointer '>
                    <Image src={ArrowLeft} alt="Arrow Left" width="48" height="48" />
                    <p className='-ml-2 font-medium'>Keep Shopping</p>
                </Link>
            </div>
            <div className="text-center h-[50vh]">
                <h1 className='text-4xl font-bold mb-10 pt-32'>Your cart is empty</h1>
                <Link href='/instrumentals'>
                    <button className="bg-black text-white rounded-full text-base font-medium m-2 py-3 px-32">Keep Shopping</button>
                </Link>
            </div>
        </div>
    return (
        <div>
            <h1>Signed in as: {user?.email}</h1>
            {cart?.length === 0 ? displayEmptyCartMsg : <CartDetails />}
        </div>
    )
}