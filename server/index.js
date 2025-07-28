// server/index.js
app.get('/api/quote', async (req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    const quote = response.data[0];
    res.json({
      quote: quote.q,
      author: quote.a
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
});
