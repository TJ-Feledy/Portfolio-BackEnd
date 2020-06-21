
exports.up = function(knex) {
  return knex.schema.createTable('count', count => {
      count.increments()
      count.integer('count')
        .unsigned()
        .notNullable() 
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('count')
};
