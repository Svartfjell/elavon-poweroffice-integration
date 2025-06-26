require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is running 🎉');
});

app.get('/api/elavon/invoices', async (req, res) => {
  res.json({ message: 'Elavon data will go here' });
});

app.post('/api/pog/postinvoice', async (req, res) => {
  res.json({ message: 'Invoice posted to PowerOffice Go' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
