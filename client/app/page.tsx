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

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
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
    <div className='home-page'>
      <div className="home-banner-section">
        <div className="home-banner-content">
          <h3>Hızlı, Güvenilir ve Kaliteli <br /> <span>Medikal</span> Çözümler</h3>
          <p> Medikal ürünlerimizle hayatınızı kolaylaştırmayı ve sağlığınızı en iyi şekilde desteklemeyi hedefliyoruz. İster evde ister profesyonel sağlık alanında kullanabileceğiniz ürünlerimiz, uluslararası kalite standartlarına uygun olarak tasarlanmıştır.
          </p>
          <Link href="/contact" prefetch={false}>İLETİŞİM</Link>
        </div>
      </div>
      <section className="browse-medicals-section container">
        <h2 className="title">Sağlık ürünleri</h2>
        <div className="medicals-cards-area row m-0">
          {filteredProducts.map((product) => (
            <div className="medicals-card col-lg-3 col-md-6 col-sm-6 col-6" key={product._id} >
              <img src={product.images} alt="" />
              <div className="medicals-content">
                <div className="medicals-text">
                  <h3>{product.name}</h3>
                  <p>{product.price} ₺ </p>
                </div>
                <div className="medicals-buttons">
                  <button type="button" onClick={() => redirect(`/product-detail/${product._id}`)}>İncele</button>
                  <button onClick={() => addToCart(product)}>Sepete Ekle</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomePage
