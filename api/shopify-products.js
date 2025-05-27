import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      'https://bomber-breaks.myshopify.com/admin/api/2025-04/products.json',
      {
        headers: {
          'X-Shopify-Access-Token': process.env.SHOPIFY_TOKEN
        }
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: 'Failed to fetch products from Shopify' });
  }
}
