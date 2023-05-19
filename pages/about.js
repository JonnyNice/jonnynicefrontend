import React from 'react';
import pic from '../public/images/ian.jpg'
import Image from "next/image";
import Layout from '../components/Layout';

export default function About() {

    const text = `Producer and songwriter Jonny Nice's sound blends Jazz, Hip Hop, Pop, and RnB.
                    Born in Denver, Colorado, Jonny began playing classical piano at age 6.
                    His love for music and ever-adapting spirit helped him grow through multiple bands, writing and recording experiences. 
                    Nice draws his influence from a variety of musicians like Robert Glasper, London on da track, Scott Storch, and Timbaland. 
                    Jonny moved to LA in late 2018 and has been producing and writing for artists such as MARG, Sunny Malouf, B'Noir, The Brodcast, BlkSknn, and more.`

    return(
        <Layout>
            <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-home">
                <div className="absolute justify-center px-4 top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
                    <div className="z-[2] h-4/6">
                <div className="z-[2]">
                    <div className="p-5 text-white z-[7] text-center items-center w-[900px]">
                <h2 className="text-6xl font-bold"></h2>
                    <div className="flex justify-center gap-40">
                        <Image className="rounded-lg" alt={pic} src={pic} width={250} height="auto"></Image>
                    </div>
                        <p className="py-5 text-xl">{text}</p>
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}