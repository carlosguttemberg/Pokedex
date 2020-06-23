
exports.up = function(knex) {
    return knex.schema.createTable('attributes', function(table) {
        table.increments();

        table.decimal('total');
        table.decimal('hp');
        table.decimal('attack');
        table.decimal('defense');
        table.decimal('sp_atk');
        table.decimal('sp_def');
        table.decimal('speed');

        table.integer('pokemon_id').notNullable();

        table.foreign('pokemon_id').references('id').inTable('pokemons');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('attributes');
};
