import { Spotify } from "../components/Spotify";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Layout from '../components/Layout';

export default function Placements() {
    return (
        <Layout className="min-h-screen">
        <div className="flex flex-col items-center justify-center bg-fixed bg-center bg-cover bg-home p-5 relative">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-2 w-full h-full fixed"></div>
                <h2 className="text-white z-[2] text-center text-6xl font-bold py-6 pt-40">Credits</h2>
                    <div className="z-[2] h-4/6 px-5 py-3 border-solid border-2 border-zinc-800 rounded-md p-2" >
                        <div className="text-white z-2 text-center">
                        <div className="justify-center grid grid-cols-3 gap-4 py-2">
                            <YoutubeEmbed embedId="J1HOjmor9M4" />
                            <YoutubeEmbed embedId="gAH2iLzQ3z4" />
                            <YoutubeEmbed embedId="Vgoar37uF-k" />
                            <YoutubeEmbed embedId="XM4Xen1FhQc" />
                            <YoutubeEmbed embedId="1vNNMlI0utM" />
                            <YoutubeEmbed embedId="VxESWIw7WuU" />
                        </div>
                        <div className="space-y-2">
                            <Spotify wide link="https://open.spotify.com/track/0ZwYpEG8Jef3V0VPeu7q7O" id="hkstee" />
                            <Spotify wide link="https://open.spotify.com/track/2l2kFw2GBg4AVp3dbxvJPG" id="croma619" />
                            <Spotify wide link="https://open.spotify.com/track/11ktXmPnaLGXkENcAkffsG" id="stlouis" />
                            <Spotify wide link="https://open.spotify.com/track/1jSWLIZv4BvZ9I2SSTFLZ5" id="hbavaro" />
                            <Spotify wide link="https://open.spotify.com/track/2SWfDQhvdsMaplMkbDWVl1" id="marg" />
                            <Spotify wide link="https://open.spotify.com/track/1OZVXYpBha19Voe5yNBUnx" id="marg" />
                            <Spotify wide link="https://open.spotify.com/track/4lru0fJnXpreVVrpFpbqXt" id="marg" />
                            <Spotify wide link="https://open.spotify.com/album/2gSAtsHHHbkRmsEeX5wSrg" id="marg" />
                            <Spotify wide link="https://open.spotify.com/track/0CzSiafgVrzaf21rcAQ9z5" id="bnoir" />
                            <Spotify wide link="https://open.spotify.com/track/4rKLjgHC7XUMXZmE1mAZpC" id="bnoir" />
                            <Spotify wide link="https://open.spotify.com/track/3OSQ1Jtf2Q6rQyOsGYaWVk" id="winks" />
                            <Spotify wide link="https://open.spotify.com/track/4ABjTxeh2hz4G3kOZBvPvX" id="winks" />
                        <div className="grid grid-cols-3 gap-4 place-content-center">
                            <Spotify link="https://open.spotify.com/album/49MCny8XcNaNsmrbXJJrOK" className="mx-auto" id="brodcast" />
                            <Spotify link="https://open.spotify.com/album/2514mjq37KdZHDcWRyryKt" className="mx-auto" id="brodcast" />
                            <Spotify link="https://open.spotify.com/album/24KtZOCzpcUCsZd7TVDg2r" className="mx-auto" id="brodcast" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
    )
}