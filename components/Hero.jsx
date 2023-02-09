import React from "react";

export default function Hero({ heading, message }) {
    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-home">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
            <div className="p-5 text-white z-[2] text-center w-[900px]">
                <h2 className="text-6xl font-bold">{heading}</h2>
                <p className="py-5 text-xl">{message}</p>
            </div>
        </div>
    );
}