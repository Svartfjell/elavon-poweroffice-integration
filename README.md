# 🔄 Elavon → PowerOffice Go Fakturaintegrasjon

Automatisert integrasjon for å hente ut fakturadata fra Elavon (via API) og sende videre til PowerOffice Go (via API). Løsningen er bygget i Node.js og React, og mellomlagrer data i MongoDB.

---

## 📁 Prosjektstruktur

elavon-poweroffice-integration/
│
├── backend/ # Express-server som håndterer API-integrasjon og databehandling
│ └── index.js
│
├── frontend/ # React-app for brukergrensesnitt
│ ├── src/
│ └── public/
│
├── .gitignore
├── README.md
├── PRD.md # Produktkravdokumentasjon
├── package.json
└── LICENSE


---

## 🚀 Kom i gang

### 1. Klon repoet

```bash
git clone https://github.com/Svartfjell/elavon-poweroffice-integration.git
cd elavon-poweroffice-integration
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Backend (port 3001)
cd backend
node index.js

# Frontend (port 5173)
cd ../frontend
npm run dev
