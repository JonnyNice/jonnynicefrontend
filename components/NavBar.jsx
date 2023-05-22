import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router"
import CartContext from "../contexts/CartContext";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/logos/jn-logo.png";
import LogoDark from "../public/logos/jn-logo-dark.png";
import User from "../public/icons/userLight.svg";
import UserDark from "../public/icons/userDark.svg";
import UserContext from "../contexts/UserContext"

export default function Navbar() {
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
    const [cart, setCart] = useContext(CartContext);
    const [user, setUser] = useContext(UserContext);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter()
    console.log(user)

    let quantity = 0;

    cart?.forEach((cartItem) => {
        quantity += 1
    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        fetch("/api/me").then((r) => {
            if (r.ok) {r.json().then((data) => {
            setUser(data)});
            }});
        }, [setUser]);

    const handleLogOut = (e) => {
        fetch(`/api/logout`,{
            method: 'DELETE'
            })
            .then(() => {
                fetch("/api/me").then((r) => {
                    if (r.ok) {r.json().then((data) => {
                        setUser(data)});
                    }});
            });
    }


    useEffect(() => {
        if (user?.id) {
        fetch(`/api/carts/${user.id}`)
        .then(res => {
            if (res.ok){
                return res.json()
            } else {

            }
        })
        .then(cart => {
                setCart(cart);
            });
        }
    }, [setCart, user]);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setIsScrolled(scrollTop > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navbarStyle = isScrolled
        ? { top: '8px', left: '20px' }
        : { top: '10%', left: '50%', transform: 'translate(-50%, -50%)' };

    useEffect(() => {
        if (router.pathname === '/') {
            setColor('transparent');
            setTextColor('white');
        } else if (router.pathname === '/instrumentals/[id]') {
            setColor('transparent');
            setTextColor('white');
        } else if (router.pathname === '/instrumentals') {
            setColor('transparent');
            setTextColor('white');
        } else if (router.pathname === '/about') {
            setColor('transparent');
            setTextColor('white');
        } else if (router.pathname === '/contact') {
            setColor('transparent');
            setTextColor('white');
        } else if (router.pathname === '/cart') {
            setColor('white');
            setTextColor('black');
        } else if (router.pathname === '/login') {
            setColor(isScrolled ? 'transparent' : 'white');
            setTextColor(isScrolled ? 'white' : 'black');
        }
    }, [isScrolled, router.pathname])

    return (
        <div style={navbarStyle}
            className={`transition-all duration-600 ${isScrolled
                ? 'fixed z-10 h-20'
                : 'fixed top-8 w-full z-10 flex items-center justify-center h-20'}`}>
            <ul style={{ color: `${textColor}` }} className={`transition-all duration-600 ${isScrolled ?
                'pt-[220px] pl-24' : 'flex px-5 text-white'}`}>
                <li className={`transition-all duration-600 ${isScrolled ?
                '' : 'px-5'}`}><Link href="/placements">Credits</Link></li>
                <li className={`transition-all duration-600 ${isScrolled ?
                'pt-4' : 'px-5'}`}><Link href="/about">About</Link></li>
                <li className={`transition-all duration-600 ${isScrolled ?
                'pt-4' : 'px-5'}`}><Link href="/contact">Contact</Link></li>
            </ul>
            <div className={`transition-all duration-600 ${isScrolled ?
                'absolute top-20 left-20' : 'px-[250px]'}`}>
                <div className="relative w-20 h-20">
                    <div style= {{ backgroundColor: `${color}` }} className="absolute top-0 left-0 w-20 h-20 transform rotate-45"></div>
                    <Link href="/" className="z-30 relative absolute inset-x-0">
                        {color == 'transparent' ? <Image src={Logo} alt="Jonny Logo" width={115} height={16} /> : <Image src={LogoDark} alt="Jonny Logo" width={115} height={16} />}
                    </Link>
                </div>
            </div>
        {user?.email == "Guest" || user == null ?
                <ul style={{ color: `${textColor}` }} className={`transition-all duration-600 ${isScrolled ?
                    'pl-24' : 'flex px-14 text-white'}`}>
                    <li className={`transition-all duration-600 ${isScrolled ?
                'pt-4' : 'px-4'}`}><Link href="/instrumentals">Beats</Link></li>
                    <div className={`transition-all duration-600 ${isScrolled ?
                'flex pt-4' : 'flex text-white'}`}>
                        <li style={{ color: `${textColor}` }} className={`transition-all duration-600 ${isScrolled ?
                '' : 'px-4 -mr-3'}`}><Link href="/cart">Cart</Link></li>
                    {quantity > 0 ?
                        <>
                            <li className="px-2 text-white items-center bg-black rounded-full">
                                <Link href="/cart">{quantity}</Link>
                            </li>
                        </>
                    : <li className="px-3"></li>}
                    </div>
                </ul>
                :
                    <>
                        <ul style={{ color: `${textColor}` }} className={`transition-all duration-600 ${isScrolled ?
                            'pl-24' : 'flex px-4 text-white'}`}>
                            <li className={`transition-all duration-600 ${isScrolled ?
                            'pt-4' : 'px-4'}`}><Link href="/instrumentals">Beats</Link></li>
                                <div className={`transition-all duration-600 ${isScrolled ?
                                    'flex pt-4' : 'flex text-white'}`}>
                                <li style={{ color: `${textColor}` }} className={`transition-all duration-600 ${isScrolled ?
                                    '' : 'px-4 -mr-3'}`}><Link href="/cart">Cart</Link></li>
                            {quantity > 0 ?
                            <>
                                <li className="px-2 text-white items-center bg-black rounded-full">
                                    <Link href="/cart">{quantity}</Link>
                                </li>
                            </>
                        : <li className="px-3"></li>}
                        </div>
                    </ul>
                </>
                }
                <div>
                    <Link href="/login" className={`transition-all duration-600 ${isScrolled ?
                'custom-right-10' : 'px-12 hover'}`}>
                        {color == 'transparent' ? <Image src={User} alt="User Icon" width="auto" height={20} /> : <Image src={isScrolled ? User : UserDark} alt="User Icon" width="auto" height={20} />}
                    </Link>
                </div>
                {user?.email == "Guest" || user == null ? null : <div>
                    {color == 'transparent' ?
                    <ul className={`transition-all duration-600 ${isScrolled ?
                        'pl-[95px] pt-[44px]' : 'px-3'}`}>
                        <Link href="/" onClick={handleLogOut} className={`transition-all duration-600 ${isScrolled ?
                            'text-white' : 'text-white'}`}>
                            Logout
                        </Link>
                        </ul>
                        :
                        <ul className={`transition-all duration-600 ${isScrolled ?
                            'pl-[95px] pt-[44px]' : 'px-3'}`}>
                            <Link href="/" onClick={handleLogOut} className={`transition-all duration-600 ${isScrolled ?
                            'text-white' : 'text-black'}`}>
                                Logout
                            </Link>
                        </ul>
                    }
                </div>}
        </div>
    );
}