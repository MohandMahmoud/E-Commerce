const express = require('express');
const app = express();
const port = 5079;
const path = require('path');
const mongoose = require('mongoose');
const productModel = require('./models/productModel');
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/js", express.static(path.join(__dirname, "js")));

//192.168.1.2
mongoose.connect('mongodb://192.168.1.2:27017/tazaj').then(() => {
    console.log('SUCCESSFULLY!!!!!!!!!!')
    console.log('Connected To MongoDB')
}).catch((err) => {
    console.log(`Error Connecting to mongodb due to: ${err}`)
})
// const productScheme = new productModel({
//     imagePath: 'static/shop_imgs/cabbage.jpg',
//     pagePath: './cabbage',
//     productName: 'cabbage',
//     price: '20'
// });
// productScheme.save();

app.get('/', async (req, res) => {
    console.log(`${req.url}product_catalog`)
    try {
        let products = await productModel.find();
        console.log(products);
        res.redirect(`/product_catalog?items=${encodeURIComponent(JSON.stringify(products))}&redirect=true`);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/product_catalog', async (req, res) => {
    console.log(`${req.url}`)
    try {
        res.sendFile(path.join(__dirname, './Shop.html'))
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/tomatoes', async (req, res) => {
    console.log(`${req.url}`)
    try {
        res.sendFile(path.join(__dirname, './tomatoes.html'))
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/zucchini', async (req, res) => {
    console.log(`${req.url}`)
    try {
        res.sendFile(path.join(__dirname, './Zucchini.html'))
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/potatoes', async (req, res) => {
    console.log(`${req.url}`)
    try {
        res.sendFile(path.join(__dirname, './Potatos.html'))
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/onions', async (req, res) => {
    console.log(`${req.url}`)
    try {
        res.sendFile(path.join(__dirname, './Onion.html'))
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/mulukhiyah', async (req, res) => {
    console.log(`${req.url}`)
    try {
        res.sendFile(path.join(__dirname, './Mulukhiyah.html'))
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/eggplant', async (req, res) => {
    console.log(`${req.url}`)
    try {
        res.sendFile(path.join(__dirname, './Eggplant.html'))
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/cauliflower', async (req, res) => {
    console.log(`${req.url}`)
    try {
        res.sendFile(path.join(__dirname, './Cauliflower.html'))
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.get('/cabbage', async (req, res) => {
    console.log(`${req.url}`)
    try {
        res.sendFile(path.join(__dirname, './Cabbage.html'))
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
