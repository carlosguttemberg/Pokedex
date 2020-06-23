const express = require('express');

const PokemonController = require('./controllers/PokemonController');

const routes = express.Router();


routes.get('/', PokemonController.index);

module.exports = routes;