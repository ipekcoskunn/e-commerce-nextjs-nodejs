const express = require('express');
const connectDB = require('./database');
const User = require('./models/User')
const Product = require('./models/Products')
const cors = require('cors')

require('dotenv').config();
connectDB

const app = express();
app.use(express.json());
app.use(cors()); //cross platform sağlama
const bcrypt = require('bcrypt');

// Kullanıcı ekleme endpoint'i
app.post('/addUser', async (req, res) => {
    try {
        const { password, ...otherData } = req.body; // Şifreyi ayırıyoruz
        const saltRounds = 10; // bcrypt için tuzlama miktarı

        // Şifreyi hash'le
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Yeni kullanıcı nesnesi oluştur
        const user = new User({
            ...otherData,
            password: hashedPassword, // Hashlenmiş şifreyi kaydet
        });

        // Kullanıcıyı kaydet
        const result = await user.save();
        res.status(201).json(result);
    } catch (err) {
        console.error("Kullanıcı kaydedilemedi:", err);
        res.status(400).json({ error: "Kullanıcı kaydedilemedi" });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "Kullanıcı bulunamadı" });
        }


        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Hatalı şifre" });
        }

        console.log(user.password);
        console.log(password);
        console.log(isMatch)
        console.log(user)
        res.json({ message: "Başarıyla giriş yapıldı", user });
    } catch (err) {
        console.error("Hata:", err);
        res.status(500).json({ error: "Sunucu hatası" });
    }
});

app.post('/updateUser/:id', (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;


    User.findByIdAndUpdate(userId, updateData, { new: true })
        .then((updatedUser) => {
            if (!updatedUser) {
                return res.status(404).send("Kullanıcı bulunamadı");
            }
            res.send(updatedUser);
            console.log("Kullanıcı başarıyla güncellendi:", updatedUser);
        })
        .catch((err) => {
            console.error("Kullanıcı güncellenirken bir hata oluştu: ", err);
            res.status(500).send("Sunucu hatası");
        });
});

app.get('/showUser', (req, res) => {
    User.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log("veri getirilimedi hata : " + err)
        })
});

app.get('/singleUser', (req, res) => {
    const { email, password } = req.query;

    User.findOne({ email: email })
        .then((user) => {
            if (!user) {
                return res.status(404).send("Kullanıcı bulunamadı");
            }
            res.send(user);
            console.log("basarili")
        });
});

app.get('/allProducts', (req, res) => {
    Product.find()
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log("veri getirilimedi hata : " + err)
        })
});

app.get('/product/:id', (req, res) => {
    const productId = req.params.id;

    Product.findById(productId)
        .then((result) => {
            if (!result) {
                return res.status(404).json({ message: 'Ürün bulunamadı' });
            }
            res.json(result);
        })
        .catch((err) => {
            console.log("Veri getirilmedi, hata: " + err);
            res.status(500).json({ message: 'Sunucu hatası' });
        });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});