const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static assets (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Clean URL routes
const pages = ['about','packages','correction','book','faq','service-area','blog-community-review','privacy'];

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

pages.forEach(page => {
  app.get(`/${page}`, (req, res) => res.sendFile(path.join(__dirname, `${page}.html`)));
});

// Redirect .html requests to clean URLs
app.get('/:page.html', (req, res) => {
  const page = req.params.page;
  if (page === 'index') return res.redirect(301, '/');
  return res.redirect(301, `/${page}`);
});

// 404 fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
