import { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeOff, FaForward, FaBackward, FaInfinity } from "react-icons/fa";

export default function Audio({ audioUrl, onPlay, onPause, isPlaying }) {
    const audioRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isLooping, setIsLooping] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const audio = audioRef.current;
        const handleTimeUpdate = () => {
            if (!isDragging) {
                setCurrentTime(audio.currentTime);
            }
        };
        const handleLoadedMetadata = () => {
            setDuration(audio.duration);
        };
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [isDragging]);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
            onPause();
        } else {
            audioRef.current.play();
            onPlay();
        }
    };

    const handleVolumeChange = (e) => {
        const volume = parseFloat(e.target.value);
        setVolume(volume);
        audioRef.current.volume = volume;
    };

    const handleFastForward = (seconds) => {
        const newTime = currentTime + seconds;
        const clampedTime = Math.max(0, Math.min(newTime, duration));
        setCurrentTime(clampedTime);
        audioRef.current.currentTime = clampedTime;
    };

    const handleRewind = (seconds) => {
        const newTime = currentTime - seconds;
        const clampedTime = Math.max(0, Math.min(newTime, duration));
        setCurrentTime(clampedTime);
        audioRef.current.currentTime = clampedTime;
    };

    const handleLoopToggle = () => {
        const newLoopState = !isLooping;
        setIsLooping(newLoopState);
        audioRef.current.loop = newLoopState;
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const mute = () => {
        if (volume === 0) {
            setVolume(1);
        } else {
            setVolume(0);
        }
    };

    return (
        <div className="bg-slate-900 bg-opacity-75 rounded-md shadow-xl audio-player w-full max-w-500px mx-auto pt-3">
            <audio ref={audioRef} src={audioUrl} preload="metadata" />
                <div className="title flex justify-between items-center px-1">
                    <div>{formatTime(currentTime)}</div>
                        <div className="progress-bar-container flex-grow px-4">
                            <input
                                type="range"
                                min="0"
                                max={duration}
                                step="1"
                                value={currentTime}
                                onChange={(e) => {
                                    const time = parseInt(e.target.value);
                                    setCurrentTime(time);
                                    audioRef.current.currentTime = time;
                                }}
                                className="appearance-none outline-none playRange-slider accent-gray-300"
                                style={{ '--play-width': `${((currentTime / duration) * 100) + .5}%` }}
                            />
                        </div>
                    <div>{formatTime(duration)}</div>
                </div>
                    <div className="controls flex justify-between items-center px-1 pt-2 pb-1">

                        <div>
                            <button onClick={handleLoopToggle} className="relative z-10">
                                {isLooping ? <FaInfinity size= {20} color="#7fce00" /> : <FaInfinity size= {20} color="#d1d5db" />}
                            </button>
                        </div>

                        <div className="absolute inset-x-0">
                            <button onClick={() => handleRewind(5)}><FaBackward size= {20} color="#d1d5db" /></button>
                                <button onClick={handlePlayPause} className="px-4">
                                    {isPlaying ? <FaPause size= {24} color="#d1d5db" /> : <FaPlay size= {24} color="#d1d5db" />}
                                </button>
                            <button onClick={() => handleFastForward(5)}><FaForward size= {20} color="#d1d5db" /></button>
                        </div>

                    <div className="title flex items-center justify-between" >
                        <button onClick={mute} className="pr-2 relative z-10" style={{ paddingTop: '.4rem' }}>{ volume === 0 ? <FaVolumeOff color="#d1d5db" /> : <FaVolumeUp color="#d1d5db" /> }</button>
                    <div className="volume max-w-100px">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="appearance-none outline-none range-slider accent-gray-300"
                            style={{ '--volume-width': `${volume * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}