const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const pokemon_id = request.headers.pokemon_id;

        const pokemons = await connection('attributes')
                                .join('pokemons', 'pokemons.id', '=', 'attributes.pokemon_id')
                                .limit(1)
                                .where('attributes.pokemon_id', pokemon_id)
                                .select(['pokemons.*', 'attributes.total', 'attributes.hp', 
                                         'attributes.attack', 'attributes.defense', 
                                         'attributes.sp_atk', 'attributes.sp_def', 
                                         'attributes.speed']);

        return response.json(pokemons);
    }
}