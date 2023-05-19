import React from 'react'
import { UserProvider } from '../contexts/UserContext'
import { CartProvider } from '../contexts/CartContext'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <UserProvider>
      <CartProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </CartProvider>
    </UserProvider>
    )
}
