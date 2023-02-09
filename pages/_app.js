import React, { useEffect, useState, useContext } from 'react'
import UserContext, { UserProvider } from '../contexts/UserContext'
import { CartProvider } from '../contexts/CartContext'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <UserProvider>
      <CartProvider>
        <NavBar />
        <Component {...pageProps} />
      </CartProvider>
    </UserProvider>
    )
}
