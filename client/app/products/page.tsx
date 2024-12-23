'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { redirect } from 'next/navigation'

interface Product {
    _id: string;
    name: string;
    desc: string;
    category: string;
    price: number;
    images: string;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<string[]>([]); // Kategoriler bir string dizisi
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('http://localhost:5000/allProducts');
                setProducts(response.data);
                setFilteredProducts(response.data);
                console.log(response.data);

                const uniqueCategories = [...new Set(response.data.map(product => product.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error('Ürünler alınamadı:', error);
            }
        };

        fetchProducts();
    }, []);

    // Arama
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(term) ||
            product.desc.toLowerCase().includes(term) ||
            product.category.toLowerCase().includes(term)
        );

        setFilteredProducts(filtered);
    };

    // Kategoriye göre filtreleme
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        const filteredByCategory = products.filter((product) => product.category === category);
        setFilteredProducts(filteredByCategory);
    };

    // Sepete ürün ekleme
    const addToCart = (product: Product) => {
        let cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        alert('Ürün sepete eklendi!');
    };
    return (
        <div>
            <section className="reviews-medicals">
                <div className="container">
                    <div className="row">
                        <div className="reviews-sidebar col-lg-3 col-md-3 col-sm-12 col-12">
                            <h1>Kategoriler</h1>
                            <p>Ürünleri Kategorilerine Göre Arayabilirsiniz</p>
                            <div className="sidebar-content">
                                <div>
                                    <div className="form-group">
                                        <label>Ürün adı giriniz</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Ürün Ara"
                                            value={searchTerm}
                                            onChange={handleSearch}
                                        />
                                        <div className="sidebar-buttons">
                                            <a href="#">Reset</a>
                                            <a href="#">Ara</a>
                                        </div>
                                    </div>
                                    {categories.map((category) => (
                                        <div
                                            key={category}
                                            className="form-check form-check-inline mt-20"
                                            onClick={() => handleCategoryClick(category)}
                                        >
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id={category}
                                                value={category}
                                            />
                                            <label className="form-check-label">{category}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="medicals-info-content col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="row">
                                {filteredProducts.map((product) => (
                                    <div className="medicals-card col-lg-4 col-md-4 col-sm-4 col-12" key={product._id}>
                                        <div className="product-info">
                                            <div className="row">
                                                <div className="product-image">
                                                    <img src={product.images} alt="" />
                                                </div>
                                                <div className="">
                                                    <h3>{product.name}</h3>
                                                    <p><span>Description:</span> {product.desc}</p>
                                                    <p><span>Category:</span> {product.category}</p>
                                                    <p><span>Price:</span> {product.price} ₺</p>
                                                </div>
                                                <div className="sidebar-buttons" >
                                                    <button type="button" onClick={() => redirect(`/product-detail/${product._id}`)}>İncele</button>
                                                    <Link href="/products" prefetch={false} onClick={() => addToCart(product)}>Sepete Ekle</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};