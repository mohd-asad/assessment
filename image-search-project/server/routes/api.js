// server/routes/api.js
const express = require('express');
const Search = require('../models/Search');
const { searchPhotos } = require('../utils/unsplash');

const router = express.Router();

router.post('/search', async (req, res) => {
  try {
    const termRaw = (req.body.term || '').trim();
    if (!termRaw) return res.status(400).json({ error: 'term required' });

    const page = Number(req.body.page) || 1;
    // call unsplash
    const unsplash = await searchPhotos(termRaw, page, 30);
    const results = unsplash.results || [];
    const total = unsplash.total || results.length;

    // store search record 
    try {
      await Search.create({
        user: req.user ? req.user._id : null,
        term: termRaw.toLowerCase(),
        resultsCount: total,
      });
    } catch (e) {
      // log but don't block response
      console.error('Failed to store search:', e.message);
    }

    return res.json({ results, total });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'search failed' });
  }
});

// GET /api/top-searches
router.get('/top-searches', async (req, res) => {
  try {
    // top 10 items in last 30 days 
    const since = new Date(Date.now() - 1000 * 60 * 60 * 24 * 30);
    const top = await Search.aggregate([
      { $match: { timestamp: { $gte: since } } },
      { $group: { _id: '$term', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
      { $project: { term: '$_id', count: 1, _id: 0 } }
    ]);
    res.json({ top });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed to fetch top searches' });
  }
});

// GET /api/history
router.get('/history', async (req, res) => {
  try {
    if (!req.user) return res.status(401).json({ history: [] });
    const history = await Search.find({ user: req.user._id })
      .sort({ timestamp: -1 })
      .limit(50)
      .select('term timestamp -_id')
      .lean();
    res.json({ history });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed to fetch history' });
  }
});

module.exports = router;
