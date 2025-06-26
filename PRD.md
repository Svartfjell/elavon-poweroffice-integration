# 📄 Product Requirements Document (PRD)

## 🧾 Prosjektnavn
**Elavon → PowerOffice Go Fakturaintegrasjon**

---

## 🧭 Oversikt
Automatisere henting og overføring av fakturadata fra Elavon (via API) til PowerOffice Go (via API) gjennom en sikker, robust og daglig synkronisert backend-løsning.

---

## 🧩 Problemstilling
Regnskapsførere bruker unødvendig tid på manuell overføring av transaksjonsdata. Dette gir rom for feil og ineffektivitet. En automatisert løsning sikrer datakvalitet og sparer tid.

---

## 👥 Målgruppe
- Regnskapsførere og økonomimedarbeidere
- Økonomiavdelinger i SMB-er og større selskaper
- Systemadministratorer for integrasjoner

---

## 🎯 Forretningsmål
- Redusere manuell arbeidsmengde med 100 %
- Øke nøyaktighet i økonomirapportering
- Sikre daglig overføring uten feil

---

## ⚙️ Funksjonelle krav
- [ ] Hente faktura- og transaksjonsdata fra Elavon sitt API
- [ ] Validere og transformere data til PowerOffice Go-format
- [ ] Sende data til PowerOffice Go API
- [ ] Loggføre overføringer og feil
- [ ] Støtte manuell kjøring (for testing/feilsøking)
- [ ] Vise status og feilmeldinger i logg eller dashboard

---

## 🚧 Ikke-funksjonelle krav
- Håndtere minst 500 fakturaer daglig
- Dataoverføring skal bruke HTTPS
- API-nøkler skal lagres sikkert (.env / secrets)
- Retry ved midlertidig feil eller timeout
- Støtte både cron-job og manuell trigger

---

## 🔗 Avhengigheter
- Elavon Factolink API
- PowerOffice Go API
- MongoDB
- GitHub + GitHub Actions
- Railway, Vercel eller annen Node.js-host
- Docker (for deploy)

---

## 🏗️ Arkitektur
- **Backend:** Node.js med Express
- **Database:** MongoDB (logg og mellomlagring)
- **CI/CD:** GitHub Actions
- **Deploy:** Railway (evt. alternativ)
- **Sikkerhet:** .env + secrets i GitHub

---

## 👤 Brukerhistorier
- *Som regnskapsfører vil jeg at alle Elavon-fakturaer overføres automatisk til PowerOffice Go hver dag, så jeg slipper manuell føring.*
- *Som utvikler vil jeg at secrets håndteres sikkert så de ikke eksponeres.*
- *Som systemansvarlig vil jeg ha tilgang til logger for å feilsøke raskt.*

---

## 🔁 Dataflyt og synkronisering
- Automatisk daglig cron-job (f.eks. 02:00)
- Fakturaer markeres som synkronisert i MongoDB
- Feilede forsøk markeres med status `failed` og forsøkes på nytt

---

## ✅ Suksesskriterier
Fakturadata overføres **automatisk og feilfritt daglig** fra Elavon til PowerOffice Go. Løsningen skal tåle nettverksproblemer med retry og kreve minimal manuell oppfølging. 

---

## 🗓️ Tidslinje

| Milepæl                              | Estimat  |
|--------------------------------------|----------|
| Oppsett av prosjekt og repo          | Uke 1    |
| Mock-data og testkall                | Uke 2    |
| PowerOffice Go-integrasjon           | Uke 3    |
| Elavon API-integrasjon (sandbox)     | Uke 4    |
| Full dataflyt og logging             | Uke 5    |
| Deploy + cron-oppsett                | Uke 6    |
| Stabil drift og test i prod          | Uke 7–8  |

---

