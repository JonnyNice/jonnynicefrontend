import React from "react";
import Image from "next/image";
import Mastercard from "../public/logos/mastercard.svg"
import Paypal from "../public/logos/paypal.svg"
import Visa from "../public/logos/visa.svg"
import fb from "../public/logos/facebook-f.svg"
import insta from "../public/logos/instagram.svg"
import twitter from "../public/logos/twitter.svg"
import youtube from "../public/logos/youtube.svg"

export default function Footer() {
    return (
        <footer className="bg-zinc-900">
            <div className="text-white justify-center p-40">
                <div className="flex ">
                    <div className="w-96 mr-96">
                        <h3 className="font-bold text-base mb-4">Sign Up for Orcas Newsletter</h3>
                        <p className="font-light text-sm mb-5">Sign up to receive exclusive offers and product previews directly from Orca.</p>
                        <button className="bg-neutral-600 rounded-full text-sm m-2 py-3 px-10 mb-10">Register</button>
                        <h3 className="font-bold text-base">Follow Us</h3>
                        <div className="flex items-center space-x-5 mt-5">
                            <Image src={fb} width="11.25" height="18" alt="Facebook" />
                            <Image src={insta} width="15.75" height="18" alt="Instagram" />
                            <Image src={twitter} width="18" height="18" alt="Twitter" />
                            <Image src={youtube} width="20.25" height="18" alt="YouTube" />
                        </div>
                        <div className="flex items-center space-x-5 mt-5">
                            <Image src={Mastercard} width="84" height="15" alt="Mastercard" />
                            <Image src={Visa} width="43" height="14" alt="Visa" />
                            <Image src={Paypal} width="68" height="20" alt="Paypal" />
                        </div>
                    </div>
                    <div className="w-32"></div>
                    <div className="w-48 mr-24">
                        <h3 className="font-bold text-base mb-4">Support</h3>
                        <ul>
                            <li className="font-light text-sm mb-2">Shipping policy</li>
                            <li className="font-light text-sm mb-2">Ordering process</li>
                            <li className="font-light text-sm mb-2">Cancellations and returns</li>
                            <li className="font-light text-sm mb-2">Contact Us</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-base mb-4">More Information</h3>
                        <ul>
                            <li className="font-light text-sm mb-2">Size guide</li>
                            <li className="font-light text-sm mb-2">Warranty Registration Benefits</li>
                        </ul>
                    </div>
                </div>
                <div className="flex">
                    <ul className="flex mt-10">
                        <li className="font-light text-sm mb-2 pr-2">@ 2023 Orca Clone</li>
                        <li className="font-light text-sm mb-2 pr-2">Cookie policy</li>
                        <li className="font-light text-sm mb-2 pr-2">Terms and conditions</li>
                        <li className="font-light text-sm mb-2 pr-2">Privacy policy</li>
                        <li className="font-light text-sm mb-2 pr-2">Purchase terms and conditions</li>
                        <li className="font-light text-sm mb-2 pr-2">Statutory warranty</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}