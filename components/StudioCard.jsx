import React from 'react';
import Image from "next/image";

export default function StudioCard({image, text, button}){
    return(
        <div className="p-2 relative min-w-[500px] min-h-[750px]">
            <Image src={image || "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"} alt={image.name} className="absolute object-cover w-full min-h-750 p-2" width={500} height={750} />
            <div className="relative justify-items-center mt-64">
                <h1 className="w-full text-center text-4xl text-white">{image.name}</h1>
                <div className="w-full z-10 mt-5 flex items-center justify-center">
                    <h3>{text}</h3>
                    <div className="flex px-2">
                        {button}
                    </div>
                </div>
            </div>
        </div>
        )
    }