import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Audio from '../../components/Audio';

export default function Instrumental () {
    const [instrumental, setInstrumental] = useState([]);
    const [cart, setCart] = useContext(CartContext);
    const [user, _setUser] = useContext(UserContext);
    const router = useRouter()
    const id = router.query.id
    const [selectedLeaseId, setSelectedLeaseId] = useState(null);
    const [addedToCartIds, setAddedToCartIds] = useState([]);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleAudioPlay = () => {
        setIsPlaying(true);
    };

    const handleAudioPause = () => {
        setIsPlaying(false);
    };

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
        };

    useEffect(() => {
        let timerId;
        if (addedToCartIds.length > 0) {
            timerId = setTimeout(() => {
            setAddedToCartIds([]);
        }, 2000);
            }
        return () => clearTimeout(timerId);
    }, [addedToCartIds]);

    const handleButtonClicked = (leaseId) => {
        setSelectedLeaseId(leaseId);
        setAddedToCartIds([...addedToCartIds, leaseId]);
        handleClick(leaseId);
    };

    const audioUrl = `https://jonnynice.onrender.com${instrumental && instrumental.audio_files && instrumental.audio_files[0].file}`

    const { title } = instrumental

    return (
    <Layout>
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-beats">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]"/>
                <div className="p-5 text-white z-[2] text-center w-[900px]">
                <div className='absolute items-center z-[4]'>
                        <Link href="/instrumentals" className='flex items-center cursor-pointer'>
                            <p className='-ml-2 font-medium text-white'>← All Beats</p>
                        </Link>
                    </div>
                <h2 className="text-6xl font-bold">{title}</h2>
                <p className="py-5 text-xl"></p>
                <h3>Genre: {instrumental.genre?.name}</h3>
                    <div key={instrumental.id}>
                        <Audio
                            audioUrl={audioUrl}
                            onPlay={() => handleAudioPlay(audioUrl)}
                            onPause={handleAudioPause}
                            isPlaying={isPlaying}
                        />
                    </div>
                <h2 className="text-xl p-5">Lease Options</h2>
                <div className="flex flex-wrap justify-center gap-4 border-t-2 py-6">
                    {instrumental?.audio_files?.map((audio_file, j) => (
                        audio_file?.lease && (
                        <div key={j} className="p-4 border border-gray-200">
                            <p className="text-xl" >{audio_file.lease.contract_info}</p>
                            <div className="flex justify-between items-center pt-5" >
                                <p>Price: $ {audio_file.lease.price}</p>
                                <button
                                    className=" p-1 border rounded-md"
                                    onClick={() => handleButtonClicked(audio_file.lease.id)}
                                    disabled={selectedLeaseId === audio_file.lease.id || addedToCartIds.includes(audio_file.lease.id)}
                                >
                                    {addedToCartIds.includes(audio_file.lease.id) ? 'added!' : 'add to cart'}
                                </button>
                            </div>
                        </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    </Layout>
    )
}
