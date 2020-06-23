
exports.up = function(knex) {
    return knex.schema.createTable('pokemons', function(table) {
        table.integer('id').primary();
        table.string('name').notNullable();
        table.string('type1');
        table.string('type2');
        table.boolean('legendary');
        table.string('generation');
        table.string('img_front');
        table.string('img_back');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('pokemons');
};
