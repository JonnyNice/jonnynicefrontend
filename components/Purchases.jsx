import React, { useEffect, useState } from "react";
import DownloadButton from "./DownloadButton";
import Link from 'next/link';
import ContractDownload from "./ContractDownload";

export default function Purchases({user, setUser}) {
    const [purchases, setPurchases] = useState([]);

    useEffect(() => {
        fetch("/api/me").then((r) => {
            if (r.ok) {r.json().then((data) => {
            setUser(data)});
            }});
        }, [setUser]);

        useEffect(() => {
            setPurchases(user.purchased);
        }, [user]);

        const signed = "You're currently not signed in."
        const make = " You'll need to make an "

        return (
            <>
            <div>
                <div className="mb-8 text-center">
                    {user.email == "Guest" ? <><h1>{signed}</h1><h1>{make}<Link href="/login" className="underline">account</Link> to save your cart and purchases. </h1></> : null}
                </div>
                <h1 className="font-bold text-4xl pb-2">
                    Purchases
                </h1>
                <div>{purchases.length > 0 ? (purchases.map((purchase, index)=> {
                        return (
                            <div key={index} className="z-[5]">
                                <li>{purchase.instrumental}</li>
                                    <ul>{purchase.contract_info}</ul>
                                    <div>
                                    <ContractDownload name={purchase.instrumental} blobUrl={`https://jonnynice.onrender.com${purchase.contract}`} />
                                <DownloadButton name={purchase.instrumental} blobUrl={`https://jonnynice.onrender.com${purchase.file}`} />
                                </div>
                            </div>
                        );
                    })) : null
                    }</div>
                    <div className='py-5 mr-10'>
                </div>
            </div>
        </>
    )
}