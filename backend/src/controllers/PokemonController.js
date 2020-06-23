const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count]  = await connection('pokemons').count();

        const pokemons = await connection('pokemons')
                                .limit(20)
                                .offset((page - 1) * 20)
                                .select('*');

        response.header('X-Total-Count', count['count(*)']);
        return response.json(pokemons);
    }
}