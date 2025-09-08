# Todo_Syksy2025

## Tekijä : Sara Vehviläinen

Tämä on Oulun ammattikorkeakoulun syksyn 2025 tehtäväprojekti, jossa toteutetaan **Todo-sovellus** vaiheittain.  
Projekti koostuu kahdeksasta osasta, ja kaikki osat on toteutettu tässä repositoriossa.

-----

## 📌 Projektin sisältö

1. **React-frontend**  
   Perus Todo-lista käyttöliittymällä.

2. **Express-backend ja PostgreSQL-tietokanta**  
   Taustapalvelu, joka tallettaa tehtävät Postgres-kantaan.

3. **Testaus Mocha- ja Chai-kirjastoilla**  
   Automaattisia testejä backendille.

4. **Frontend ja backend yhdistetty**  
   Axios-kirjastolla selain ja palvelin keskustelevat keskenään.

5. **Ympäristömuuttujat ja projektin siistiminen**  
   Kehitys- ja testitilat eritelty, koodin rakenne siistitty.

6. **Käyttäjien hallinta**  
   Rekisteröityminen ja kirjautuminen.  
   Salasanojen salaus `bcrypt`-kirjastolla.  
   Käyttäjän tunnistus JSON Web Tokenin avulla.

7. **Frontendin autentikointi ja suojatut reitit**  
   React Routerilla toteutetut kirjautumissivut ja suojatut reitit.  
   Estetään Todo-listan käyttö ilman sisäänkirjautumista.

8. **MVC-rakenne backendissä**  
   Backend jaettu selkeisiin kerroksiin:  
   - **Models** (SQL-kyselyt)  
   - **Controllers** (sovelluslogiikka)  
   - **Routes** (reitit)  
   Koodi on nyt jaettu selkeisiin osiin ja sitä on helppo ylläpitää.

-----

## 🛠 Käytetyt teknologiat

- **Frontend:** React, React Router, Axios  
- **Backend:** Node.js, Express  
- **Tietokanta:** PostgreSQL  
- **Autentikointi:** bcrypt, JSON Web Token (JWT)  
- **Testaus:** Mocha, Chai  

## 🚀 Asennus ja käyttö

1. Kloonaa repo:
   ```bash
   git clone https://github.com/SartsaPartsa/Todo_Syksy2025.git

2. Asenna riippuvuudet sekä client- että server-hakemistoissa
   ```bash
      npm install

3. Käynnistä backend (server-kansiossa)
   ```bash
      npm run devStart

4. Käynnistä frontend (client- tai ToDo-App -kansiossa)
   ```bash
      npm run dev

5. Avaa selain ja siirry osoitteeseen, joka näkyy terminaalissa  
   
    yleensä:  **http://localhost:5173**




