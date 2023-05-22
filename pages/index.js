import Head from 'next/head'
import Hero from '../components/Hero'
import React from 'react'
import { loadStripe } from "@stripe/stripe-js"
import Layout from '../components/Layout';

export default function Home() {

  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  return (
    <Layout>
      <Hero heading="Jonny Nice" message="Producer, Pianist, Composer" />
    </Layout>
  )
}
