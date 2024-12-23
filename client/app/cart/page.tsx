"use client"
import React, { useState, useEffect } from 'react';
import { BsJustifyRight } from 'react-icons/bs';

interface Product {
    _id: string;
    name: string;
    price: number;
    quantity: number;
    images: string;
}

const CartPage = () => {
    const [cart, setCart] = useState<Product[]>([]);

    useEffect(() => {

        const storedCart = JSON.parse(sessionStorage.getItem('cart') || '[]') as Product[];
        setCart(storedCart.map(item => ({ ...item, quantity: item.quantity || 1 })));
    }, []);


    const removeFromCart = (productId: string) => {
        const updatedCart = cart.filter(item => item._id !== productId);
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };


    const increaseQuantity = (productId: string) => {
        const updatedCart = cart.map(item =>
            item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };


    const decreaseQuantity = (productId: string) => {
        const updatedCart = cart.map(item =>
            item._id === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    return (
        <div className="cart-products-reviews-section">
            <div className="container">
                <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="product-card">
                        {cart.length === 0 ? (
                            <p>Sepetiniz boş.</p>
                        ) : (
                            <div className="row m-0">
                                {cart.map((item) => (
                                    <div className='d-flex'>
                                        <div className="product-info col-lg-9 col-md-9 col-sm-9 col-9" key={item._id}>
                                            <h3>
                                                {item.name}
                                            </h3>
                                            <p><span>Birim Fiyatı:</span> {item.price}</p>
                                            Miktar:
                                            <button onClick={() => decreaseQuantity(item._id)} style={{ marginLeft: '10px' }}>
                                                -
                                            </button>
                                            <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item._id)}>+</button>
                                            Toplam: {item.price * item.quantity} TL
                                            <button onClick={() => removeFromCart(item._id)} style={{ marginTop: '10px' }}>
                                                Sepetten Kaldır
                                            </button>
                                        </div>
                                        <div className="product-image col-lg-3 col-md-3 col-sm-3 col-3">
                                            <img src={item.images} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        {cart.length > 0 && (
                            <div className='text-end'>
                                <h3>
                                    Genel Toplam: {cart.reduce((total, item) => total + item.price * item.quantity, 0)} TL
                                </h3>
                            </div>
                        )}
                    </div>

                </div>
            </div></div>
    )
}

export default CartPage