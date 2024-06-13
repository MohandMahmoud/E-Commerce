const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
// const {cartRoute, productCatalogRoute} = require('../routes');

app.use('/static', express.static(path.join(__dirname, './static')));
app.use('/css', express.static(path.join(__dirname, './css')));
app.use('/js', express.static(path.join(__dirname, './js')));
// app.use('/cart', cartRoute);
// app.use('/shop', productCatalogRoute);
app.get('/', async(req, res) => {
  //res.sendFile(path.join(__dirname, '../frontend/index.html'));
  console.log(`req.url: ${req.url}`)

  try {
      res.sendFile(path.join(__dirname, './homePage.html'))
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }

});

// app.get('/cart', async(req, res) => {
//   console.log(`req.url: ${req.url}`)
//   http.get('http://localhost:4000', (httpRes) => {
//     let data = '';
//     httpRes.on('data', (chunk) => {
//       data += chunk;
//     });
//     httpRes.on('end', () => {
//       // Respond with the fetched data
//       res.send(data);
//     });
//   }).on('error', (error) => {
//     console.error('Error fetching link:', error);
//     res.status(500).send('Error fetching link');
//   });
//   })
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
