import Head from 'next/head'
import { Inter } from '@next/font/google'
import Carousel from '../components/Carousel'
import Hero from '../components/Hero'
import React from 'react'
import { loadStripe } from "@stripe/stripe-js"
import Layout from '../components/Layout';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

   return (
    <Layout>
      <Hero heading="Jonny Nice" message="Producer, Pianist, Composer" />
      {/* <div className='mx-48'>
        <div className='flex items-center justify-center m-auto w-4/6'>
          <p className='mt-10 text-center text-4xl font-bold mb-20'>
            Jonny Nice Productions
          </p>
        </div>
        <Carousel />
      </div> */}
    </Layout>
  )
}
