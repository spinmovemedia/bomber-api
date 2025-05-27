import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/shopify-products', async (req, res) => {
  try {
    const response = await axios.get(
      'https://bomber-breaks.myshopify.com/admin/api/2025-04/products.json',
      {
        headers: {
          'X-Shopify-Access-Token': process.env.SHOPIFY_TOKEN
        }
      }
    );
    res.json(response.data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch products from Shopify' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`API running on port ${port}`));
