import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const index = () => {
    return (
        <div className="">
            <footer className="footer-section">
                <div className="container">
                    <div className="main-footer">
                        <span>
                            <p>Having problems?</p>
                            <p><FaEnvelope />info@ecommerce.com</p>
                            <p><FaPhone />05415814212</p>
                        </span>
                        <div className="mobile-footer">
                            <ul>
                                <li>
                                    <Link href="/" prefetch={false}>Anasayfa</Link>
                                </li>
                                <li><Link href="/products" prefetch={false}>Ürünler</Link></li>
                                <li><Link href="/product-detail" prefetch={false}>Ürün Detay</Link></li>
                                <li><Link href="/cart" prefetch={false}>Sepet</Link></li>
                                <li><Link href="/contact" prefetch={false}>iletişim</Link></li>
                            </ul>
                        </div>
                        <span className="footer-logo"><img src="/images/logo.jpg" alt="Match Medic" /></span>
                    </div>

                    <div className="bottom-footer">
                        Made with 🖥️ by&nbsp;
                        <Link href="https://www.linkedin.com/in/ipekcoskun5941/" target="_blank" className="">
                            İpek Coşkun
                        </Link>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default index