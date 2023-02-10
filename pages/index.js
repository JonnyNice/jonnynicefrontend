import Head from 'next/head'
import { Inter } from '@next/font/google'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from '@stripe/react-stripe-js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonny Nice Productions</title>
        <meta name="description" content="Jonny Nice Productions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Hero heading="Jonny Nice" message="Producer, Pianist, Composer" />
      <div className='mx-48'>
        <div className='flex items-center justify-center m-auto w-4/6'>
          <p className='mt-10 text-center text-4xl font-bold mb-20'>
            Jonny Nice Productions
          </p>
        </div>
        <Carousel />
      </div>
    </>
  )
}
