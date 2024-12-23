"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { FaUser } from 'react-icons/fa'

const index = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = sessionStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);

    return (
        <div className='ecommerce-header'>
            <div className="">
                <div className="ecommerce-navbar">
                    <div className="logo">
                        <img src="/images/logo.jpg" alt="" />
                    </div>
                    <nav className="desktop-menu">
                        <ul>
                            <li className="active-nav">
                                <Link href="/" prefetch={false}>Anasayfa</Link>
                            </li>
                            <li><Link href="/products" prefetch={false}>Ürünler</Link></li>
                            <li><Link href="/cart" prefetch={false}>Sepet</Link></li>
                            <li><Link href="/contact" prefetch={false}>iletişim</Link></li>
                            {user ? (
                                <li><Link href="/profile" prefetch={false}>Profil</Link></li>
                            ) : (
                                <li><Link href="/login" prefetch={false}>Giriş</Link></li>
                            )}
                        </ul>
                    </nav>
                </div>
                <div className="mobile-menu">
                    <nav>
                        <ul>
                            <li>
                                <Link href="/" prefetch={false}>Anasayfa</Link>
                            </li>
                            <li><Link href="/products" prefetch={false}>Ürünler</Link></li>
                            <li><Link href="/cart" prefetch={false}>Sepet</Link></li>
                            <li><Link href="/contact" prefetch={false}>iletişim</Link></li>
                            {user ? (
                                <li><Link href="/profile" prefetch={false}>Profil</Link></li>
                            ) : (
                                <li><Link href="/login" prefetch={false}>Giriş</Link></li>
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default index