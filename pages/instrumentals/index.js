import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Audio from '../../components/Audio';

export default function Instrumentals () {
    const [instrumentals, setInstrumentals] = useState([]);
    const [cart, setCart] = useContext(CartContext);
    const [searchValue, setSearchValue] = useState("");
    const [user, _setUser] = useContext(UserContext);
    const router = useRouter()
    const [selectedInstrumental, setSelectedInstrumental] = useState(null);
    const [currentAudioUrl, setCurrentAudioUrl] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const handleAudioPlay = (audioUrl) => {
        if (currentAudioUrl !== audioUrl) {
            if (currentAudioUrl) {
                const currentAudio = document.querySelector(`audio[src="${currentAudioUrl}"]`);
                currentAudio.pause();
            }
        setCurrentAudioUrl(audioUrl);
        setIsPlaying(true);
        }
    };

    const handleAudioPause = () => {
        setCurrentAudioUrl('');
        setIsPlaying(false);
    };


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
                console.log(data);
                setCart(items => [...(items || []), data])
                setSelectedInstrumental(id);
                setTimeout(() => {
                    setSelectedInstrumental(null);
                }, 2000);
            })
        }

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    const filteredBeats = instrumentals.filter((instrumental) => instrumental.title.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <Layout className="min-h-screen">
            <div className="flex flex-col items-center justify-center bg-fixed bg-center bg-cover bg-beats p-5 relative">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-2 w-full h-full fixed"></div>
                    <div className="p-5 text-white z-[2] text-center w-[900px] flex flex-col" >
                        <h2 className="text-6xl font-bold pt-40">All Beats</h2>
                    <div className="flex justify-between">
                        <p className="text-l p-1">Select a title to see lease options</p>
                        <form className="mb-6">
                            <input
                            type="text"
                            placeholder="Search by title..."
                            value={searchValue}
                            onChange={handleSearch}
                            className="border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent p-1"
                            />
                        </form>
                    </div>
                <div className="flex flex-col z-[2] h-4/6 px-5 py-3 border-solid border-2 border-zinc-800 rounded-md p-2">
                {instrumentals && filteredBeats.map((instrumental, index) => {
                    const audioUrl = `https://jonnynice.onrender.com${instrumental.audio_files[0].file}`;
                    const isPlaying = currentAudioIndex === index;
                    return (
                        <div key={instrumental.id} className="p-4">
                            <div className="border-2 border-slate-800 rounded-lg p-2">
                                <Link href={`/instrumentals/${instrumental.id}`}>
                                        <p className='underline font-bold text-xl pt-2'>{instrumental.title}</p>
                                    </Link>
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={() => {handleClick(instrumental.audio_files[0].lease?.id)}}
                                        className="border-2 rounded-md"
                                    >
                                        {selectedInstrumental === instrumental.audio_files[0].lease?.id ? `${instrumental.title}\u00A0added to cart` : "Add to Cart" }
                                    </button>
                                    <h3>Genre: {instrumental.genre.name}</h3>
                                </div>
                                    <Audio
                                        audioUrl={audioUrl}
                                        onPlay={() => handleAudioPlay(audioUrl)}
                                        onPause={handleAudioPause}
                                        isPlaying={currentAudioUrl === audioUrl && isPlaying}
                                    />
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
}