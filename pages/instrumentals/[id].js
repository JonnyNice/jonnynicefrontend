import React, { useState, useEffect, useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import CartContext from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';
import { useRouter } from 'next/router';


export default function Instrumental () {
    const [instrumental, setInstrumental] = useState([]);
    const [cart, setCart] = useContext(CartContext);
    const [user, _setUser] = useContext(UserContext);
    const router = useRouter()
    const id = router.query.id

    useEffect(() => {
        fetch(`/api/instrumentals/${id}`)
            .then(res => res.json())
            .then(instrumental => setInstrumental(instrumental))
    }, [id]);

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

    const audioUrl = `http://localhost:3000/${instrumental && instrumental.audio_files && instrumental.audio_files[0].file}`

    const { title } = instrumental

    return (
        <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover bg-home">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
                <div className="p-5 text-white z-[2] text-center w-[900px]">
                <h2 className="text-6xl font-bold">{title}</h2>
                    <p className="py-5 text-xl"></p>
                    <div key={instrumental.id}>
                        <AudioPlayer
                            src={audioUrl}
                            onPlay={e => console.log("onPlay")}
                        />
                <h3>Genre: {instrumental.genre?.name}</h3>
                    <button onClick={() => {handleClick(instrumental.audio_files[0].lease?.id)}}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
