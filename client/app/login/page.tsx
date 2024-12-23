"use client";
import React, { useState } from 'react';
import { redirect } from 'next/navigation';

interface FormData {
    name: string;
    email: string;
    password: string;
    address: string;
}

const Login = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: '',
        address: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(errorData.error || 'E-posta veya şifre yanlış');
            } else {

                const result = await response.json();
                sessionStorage.setItem('user', JSON.stringify(result.user));
                console.log("başarılı");


                window.location.href = '/';
            }
        } catch (error) {
            console.error('Sunucu hatası:', error);
            alert('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    };

    return (
        <div className="login-page">
            <div className="container">
                <form className="auth-form" onSubmit={handleSubmit}>
                    <h1>Giriş Yapın</h1>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
