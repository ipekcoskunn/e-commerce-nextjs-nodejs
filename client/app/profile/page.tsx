"use client"
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    address: string;
}

const ProfilePage = () => {
    const [formData, setFormData] = useState<User>({
        _id: '',
        name: '',
        email: '',
        password: '',
        address: '',
    });

    useEffect(() => {
        const userData = sessionStorage.getItem('user');
        if (userData) {
            setFormData(JSON.parse(userData));
        }
    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleUpdateUser = async (e: FormEvent) => {
        e.preventDefault();
        const userId = formData._id;

        try {
            const response = await fetch(`http://localhost:5000/updateUser/` + userId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const updatedUser = await response.json();
                console.log("Kullanıcı başarıyla güncellendi:", updatedUser);
                alert('Kullanıcı başarıyla güncellendi!');
                sessionStorage.setItem('user', JSON.stringify(updatedUser));
            } else {
                console.error("Kullanıcı güncellenemedi");
                alert('Kullanıcı güncellenemedi. Lütfen tekrar deneyin.');
            }
        } catch (err) {
            console.error("Sunucu hatası:", err);
            alert('Bir hata oluştu, lütfen tekrar deneyin.');
        }
    };

    return (
        <div className="profile-page">
            <div className="container">
                <form className="auth-form" onSubmit={handleUpdateUser}>
                    <h1>Profil Bilgilerinizi Güncelleyin</h1>
                    <div className="form-group mt-3">
                        <label>Adınız</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>E-Postanız</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Şifreniz</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Adresiniz</label>
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button mt-5">
                        Güncelle
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
