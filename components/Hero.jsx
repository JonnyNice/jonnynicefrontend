import React from "react";
import Link from "next/link";

export default function Hero({ heading, message }) {
    return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-home">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
            <div className="p-5 text-white z-[2] text-center w-[900px]">
                <h2 className="text-6xl font-bold">{heading}</h2>
                <p className="py-5 text-xl">{message}</p>
                <div className=" pt-40 flex justify-center gap-40">
                <Link className='bg-black text-white rounded-full py-3 px-6' href="/instrumentals">Browse Beats</Link>
                <Link className='bg-black text-white rounded-full py-3 px-6' href="https://youtube.com/c/jonnynice">Youtube Channel</Link>
                <Link className='bg-black text-white rounded-full py-3 px-6' href="/contact">Contact Me</Link>
                </div>
            </div>
        </div>
    );
}