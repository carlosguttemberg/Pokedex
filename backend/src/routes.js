const express = require('express');

const PokemonController = require('./controllers/PokemonController');
const AttributesController = require('./controllers/AttributesController');

const routes = express.Router();


routes.get('/', PokemonController.index);
routes.get('/attributes', AttributesController.index);

module.exports = routes;