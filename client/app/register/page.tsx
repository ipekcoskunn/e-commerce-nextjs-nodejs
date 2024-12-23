"use client"
import React, { useState } from 'react';
import axios from 'axios';

interface FormData {
    name: string;
    email: string;
    password: string;
    address: string;
}

const Register = () => {
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
            const response = await axios.post('http://localhost:5000/addUser', formData);
            console.log("Kullanıcı başarıyla eklendi:", response.data);
            alert("Kullanıcı başarıyla eklendi!");
            sessionStorage.setItem('user', JSON.stringify(response.data));


        } catch (error) {
            console.error("Hata oluştu:", error);
            alert("Kullanıcı eklenemedi.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Ad:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    E-posta:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Şifre:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Adres:
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Gönder</button>
            </form>
        </div>
    );
};

export default Register;
