import React from 'react';

export default function About() {

    const text = `Producer and songwriter Jonny Nice's sound blends Jazz, Hip Hop, Pop, and RnB. 
                    Born in Denver, Colorado, Jonny began playing classical piano at age 6. 
                    His love for music and ever-adapting spirit helped him grow through multiple bands, writing and recording experiences. 
                    Nice draws his influence from a variety of musicians like Robert Glasper, London on da track, Scott Storch, and Timbaland. 
                    Jonny moved to LA in late 2018 and has been producing and writing for artists such as MARG, Sunny Malouf, B'Noir, The Brodcast, BlkSknn, and more.`

    return(
        <div className="">
            <p>
                {text}
            </p>
        </div>
    )
}