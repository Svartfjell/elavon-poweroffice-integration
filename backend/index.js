require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// Test-endepunkt
app.get('/', (req, res) => {
  res.send('✅ Backend is running 🎉');
});

// Test-endepunkt for Elavon
app.get('/api/elavon/invoices', (req, res) => {
  res.json({ message: 'Elavon data will go here' });
});

// POST-endepunkt for faktura til PowerOffice Go
app.post('/api/pog/postinvoice', async (req, res) => {
  try {
    const invoice = req.body;

    const response = await axios.post(
      'https://api.poweroffice.net/api/v2/invoices',
      invoice,
      {
        headers: {
          Authorization: `Bearer ${process.env.POWER_OFFICE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('✅ PowerOffice Go response:', response.data);
    res.status(200).json({ message: 'Faktura sendt til PowerOffice Go', data: response.data });

  } catch (error) {
    console.error('❌ Feil ved sending:', error.response?.data || error.message);
    res.status(500).json({ error: 'Kunne ikke sende faktura' });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

