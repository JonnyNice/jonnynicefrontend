import React from "react";
import Image from "next/image";
import insta from "../public/logos/instagram.svg"
import youtube from "../public/logos/youtube.svg"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-900">
            <div className="text-white justify-center p-8">
                <div className="flex">
                    <div className="w-96 mr-80">
                <p className="font-light text-sm mb-5">Sign up to receive exclusive news and discounts on leases.</p>
                    <Link href="/login"><button className="bg-neutral-600 rounded-full text-sm py-3 px-10">Register</button></Link>
                </div>
                    <div className="w-32"></div>
                        <h3 className="font-bold text-base ml-auto">Follow
                            <div className="flex space-x-5 pr-20 pt-4">
                        <Link href="https://www.instagram.com/jonnynicebeats/" ><Image src={insta} width="11.25" height="18" alt="Instagram" /></Link>
                            {/* <Image src={twitter} width="18" height="18" alt="Twitter" /> */}
                        <Link href="https://youtube.com/c/jonnynice" ><Image src={youtube} width="11.25" height="18" alt="YouTube" /></Link>
                            </div>
                        </h3>
                    </div>
                <div className="flex">
                    <ul className="flex mt-10">
                        <li className="font-light text-sm mb-2 pr-2">@ 2023 Jonny Nice</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}