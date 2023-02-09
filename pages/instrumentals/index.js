import React, { useState, useEffect, useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import CartContext from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Instrumentals () {
    const [instrumentals, setInstrumentals] = useState([]);
    const [cart, setCart] = useContext(CartContext);
    const [user, _setUser] = useContext(UserContext);
    const router = useRouter()

    useEffect(() => {
        fetch(`/api/instrumentals`)
            .then(res => res.json())
            .then(instrumentals => setInstrumentals(instrumentals))
    }, []);

const handleClick = (id) => {
    fetch(`/api/carts/${user.cart_id}/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            lease_id: id,
        })
    })
        .then(res => res.json())
        .then(data => {
            setCart(items => [...items, data])
        })
    }

    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-home">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
                <div className="p-5 text-white z-[2] text-center w-[900px]">
                    <h2 className="text-6xl font-bold">All Beats</h2>
                    <p className="py-5 text-xl">search</p>
                {instrumentals && instrumentals.map(instrumental => {
                    const audioUrl = `http://localhost:3000/${instrumental.audio_files[0].file}`;
                    return (
                        <div key={instrumental.id}>
                            <Link href={`/instrumentals/${instrumental.id}`}>
                                <p className='font-bold'>{instrumental.title}</p>
                            </Link>
                            <h3>Genre: {instrumental.genre.name}</h3>
                            <AudioPlayer
                                src={audioUrl}
                                onPlay={e => console.log("onPlay")}
                            />
                            <button onClick={() => {
                                handleClick(instrumental.audio_files[0].lease?.id)
                            }}>Add to Cart</button>
                            {/* ()=>{handleClick(instrumental.audio_files[0].lease?.id)} */}
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
