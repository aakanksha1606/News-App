const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Mock news data
const mockArticles = [
  {
    source: { name: 'Mock News' },
    author: 'Times of India',
    title: 'Pahalgam Terror Attack',
    description: 'Pakistan terrorists killed in Kashmir',
    url: 'https://timesofindia.indiatimes.com/india/jammu-and-kashmir-pahalgam-terror-attack-live-updates-pakistan-terrorists-killed-tourist-pm-modi-amit-shah-nia-omar-abdullah-india-pakistan-tension-shehbaz-sharif/liveblog/120973695.cms',
    urlToImage: '/a.webp',
    publishedAt: new Date().toISOString(),
    content: 'Pahalgam Attack Live Updates: Rajnath Singh tells all-party meeting that at least 100 terrorists killed in Op Sindoor'
  },
  {
    source: { name: 'Mock News' },
    author: 'Times of India',
    title: 'Elon Mask Warns All Life on Earth Will Be Destroyed by AI',
    description: 'Elon Mask warns all life on earth will be destroyed by AI',
    url: 'https://timesofindia.indiatimes.com/technology/social/elon-musk-warns-all-life-on-earth-will-be-destroyed-by-/articleshow/120938882.cms',
    urlToImage: '/b.webp',
    publishedAt: new Date().toISOString(),
    content: 'Elon Mask warns all life on earth will be destroyed by AI'
  }
];

// Routes
app.get('/api/news', (req, res) => {
  res.json({ articles: mockArticles });
});

app.get('/api/search', (req, res) => {
  const { q } = req.query;
  // Simple filter for mock search
  const filtered = mockArticles.filter(article =>
    article.title.toLowerCase().includes((q || '').toLowerCase()) ||
    article.description.toLowerCase().includes((q || '').toLowerCase())
  );
  res.json({ articles: filtered });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
