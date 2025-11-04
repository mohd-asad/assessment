// server/utils/unsplash.js
const axios = require('axios');

const UNSPLASH_BASE = 'https://api.unsplash.com';

async function searchPhotos(term, page = 1, per_page = 30) {
  const res = await axios.get(`${UNSPLASH_BASE}/search/photos`, {
    params: { query: term, page, per_page },
    headers: { Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}` },
    timeout: 10000
  });
  return res.data; 
}

module.exports = { searchPhotos };
