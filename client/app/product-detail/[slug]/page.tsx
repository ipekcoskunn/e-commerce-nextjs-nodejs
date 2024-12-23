"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function ProductDetail({ params }: any) {
    const [product, setProduct] = useState<any | null>(null);
    const id = params.slug
    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/product/${id}`);
                    setProduct(response.data);
                    console.log(response.data);
                } catch (error) {
                    console.error("Ürün bilgisi alınamadı", error);
                } finally {
                }
            };
            fetchProduct();
        }
    }, [id]);

    const addToCart = (product: any) => {
        let cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert('Ürün sepete eklendi!');
    };


    return (
        <div className="product-description-section">
            <div className='container'>
                <div className='product-image'>
                    <img src={product?.images} />
                </div>
                <div className=" row m-0">
                    <div className="product-title col-lg-2 col-md-2 col-sm-2 col-12">
                        <h3>Ürün Adı</h3>
                    </div>
                    <div className="product-content col-lg-10 col-md-10 col-sm-10 col-12">
                        <p>{product?.name}</p>
                    </div>
                    <hr />
                    <div className="product-title col-lg-2 col-md-2 col-sm-2 col-12">
                        <h3>Ürün Açıklaması</h3>
                    </div>
                    <div className="product-content col-lg-10 col-md-10 col-sm-10 col-12">
                        <p>{product?.desc}</p>
                    </div>
                    <hr />
                    <div className="product-title col-lg-2 col-md-2 col-sm-2 col-12">
                        <h3>Ürün Fiyatı</h3>
                    </div>
                    <div className="product-content col-lg-10 col-md-10 col-sm-10 col-12">
                        <p>{product?.price} ₺</p>
                    </div>
                    <div className="sidebar-buttons" onClick={() => addToCart(product)}>
                        <button>Sepete Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}