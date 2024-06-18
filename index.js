const express = require('express');
const path = require('path');

const app = express();

app.listen(8080);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/contact-me.html'));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/views/404.html'));
});
