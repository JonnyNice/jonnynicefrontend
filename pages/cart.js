import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import ArrowLeft from "../public/icons/arrow-left--dark.svg"
import Image from "next/image";
import CartDetails from "../components/CartDetails"
import CartContext from "../contexts/CartContext"
import UserContext from "../contexts/UserContext"
import Layout from '../components/Layout';

export default function Cart() {
    const [cart, setCart] = useContext(CartContext)
    const [user, setUser] = useContext(UserContext);
    const [purchaseSuccessful, setPurchaseSuccessful] = useState(false);
        console.log(user);

    const handlePurchaseSuccessful = () => {
        setPurchaseSuccessful(true);
    };

    const displayEmptyCartMsg =
        (<div className="mt-32 w-screen">
            <div className="ml-32">
                <h1>Signed in as: {user?.email}</h1>
                <div className='flex items-center mt-5 -ml-4'>
                        <Link href="/instrumentals" className='flex items-center cursor-pointer'>
                            <Image src={ArrowLeft} alt="Arrow Left" width="48" height="48" />
                        </Link>
                    </div>
            </div>
            <div className="text-center h-[50vh]">
                <h1 className='text-4xl font-bold mb-10 pt-32'>Your cart is empty</h1>
                <Link href='/instrumentals'>
                    <button className="bg-black text-white rounded-full text-base font-medium m-2 py-3 px-32">Browse Beats</button>
                </Link>
            </div>
        </div>)

    const displayPurchaseSuccessfulMsg = (
        <div className="mt-32 w-screen">
            <div className="ml-32">
                <h1>Signed in as: {user?.email}</h1>
                    <div className='flex items-center mt-5 -ml-4'>
                        <Link href="/instrumentals" className='flex items-center cursor-pointer'>
                            <Image src={ArrowLeft} alt="Arrow Left" width="48" height="48" />
                            <p className='-ml-2 font-medium'>All Beats</p>
                        </Link>
                    </div>
                </div>
                <div className="text-center h-[50vh]">
                    <h1 className='text-4xl font-bold mb-10 pt-32'>Thank you for your Purchase!</h1>
                    <h2 className='text-2xl mb-4'>Visit your Account page to view your documents and download your files</h2>
                        <Link href='/login'>
                            <button className="bg-black text-white rounded-full text-base font-medium m-2 py-3 px-32">Account</button>
                        </Link>
                    </div>
            </div>
    );

    return (
        <Layout>
        {purchaseSuccessful
            ? displayPurchaseSuccessfulMsg
            : cart?.length === 0
            ? displayEmptyCartMsg
            : <CartDetails user={user} setUser={setUser} handlePurchaseSuccessful={handlePurchaseSuccessful} />}
        </Layout>
    );
}