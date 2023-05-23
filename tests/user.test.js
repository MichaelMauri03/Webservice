const request = require('supertest');
const express = require('express');
const app = express();

// Importa il router
const router = require('../routes/routerdb.js');

// Aggiungi il router all'app Express
app.use(router);

describe('Test del router degli utenti', () => {
  test('GET /users restituisce una lista di utenti', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([])); // Assicurati di specificare gli utenti attesi
  });

  test('PUT /users/create crea un nuovo utente', async () => {
    const userData = {
      // Fornisci i dati dell'utente per la creazione
    };

    const response = await request(app)
      .put('/users/create')
      .send(userData);

    expect(response.status).toBe(201);
    // Effettua eventuali controlli aggiuntivi
  });

  test('DELETE /users/delete elimina un utente', async () => {
    const userId = 123; // Fornisci l'ID dell'utente da eliminare

    const response = await request(app)
      .delete('/users/delete')
      .send({ ID: userId });

    expect(response.status).toBe(200);
    // Effettua eventuali controlli aggiuntivi
  });

  test('PATCH /users/patch aggiorna un utente', async () => {
    const userId = 123; // Fornisci l'ID dell'utente da aggiornare
    const updatedUserData = {
      // Fornisci i dati aggiornati per l'utente
    };

    const response = await request(app)
      .patch('/users/patch')
      .send({ ID: userId, ...updatedUserData });

    expect(response.status).toBe(200);
    // Effettua eventuali controlli aggiuntivi
  });
});
