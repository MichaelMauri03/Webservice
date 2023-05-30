const request = require('supertest');
const express = require('express');
const app = express();
const router = require('../routes/routerdb.js');

app.use(router);

describe('Test del router degli utenti', () => {
  test('GET /users restituisce una lista di utenti', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined(); 
    console.log(response.body);
  });
});

  test('PUT /users/create crea un nuovo utente', async () => {
    const userData = {
      Email: "alex@mail.com",
      Name: "Alex",
      Surname: "Grandi",
      password: "alex1",
      Role: "Amministratore"
      };

    const response = await request(app)
      .put('/users/create')
      .send(userData);

    expect(response.status).toBe(201);
  });

  test('DELETE /users/delete elimina un utente', async () => {
    const userId = 2; 
    const response = await request(app)
      .delete('/users/delete')
      .send({ ID: userId });

    expect(response.status).toBe(200);
  });

  test('PATCH /users/patch aggiorna un utente', async () => {
    const userId = 2; 
    const updatedUserData = {
    Email: "marco@mail.com",
    Name: "Marco",
    Surname: "Manente",
    password: "marco1",
    Role: "Amministratore"
    };

    const response = await request(app)
      .patch('/users/patch')
      .send({ ID: userId, updatedUserData });

    expect(response.status).toBe(200);
  })
  
