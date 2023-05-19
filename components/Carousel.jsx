import React, { useState, useEffect} from "react";
import StudioCard from "./StudioCard";
import Link from "next/link";
import Image1 from '../public/images/image1.jpg'
import Image2 from '../public/images/image2.jpg'
import Image3 from '../public/images/image3.jpg'
import Image4 from '../public/images/image4.jpg'
import Image5 from '../public/images/image5.jpg'

export default function Carousel() {
    const images = [Image1, Image2, Image3, Image4, Image5]

    const pictureMap = images.map((image, index) => (
        <StudioCard key={index} image={image} name={image.name} button={createGenderButtons()} />
        )
    )
    function createGenderButtons() {
        return (
            <>
                <button className="px-5 bg-white hover:bg-slate text-black font-bold py-2 rounded-full">
                    <Link href="/instrumentals">{`Beats`}</Link>
                </button>
            </>
        )
    }

    return (
            <div className="flex overflow-x-auto scroll-auto cursor-grab will-change-scroll scrollbar-hide">
                {pictureMap}
            </div>
        )
}