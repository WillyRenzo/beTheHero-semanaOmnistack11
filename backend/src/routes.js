const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;

/*
routes.post('/users', (request, response) => {
    const params = request.body;
    
    console.log(params);


    return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Willy Renzo de Melo',
    });
}); //A aplicação pega a rota '/' e faz a resposta com o response
*/