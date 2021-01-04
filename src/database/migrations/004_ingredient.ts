import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('ingredient', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.double('price').notNullable()
    table
      .integer('id_ingredient_category')
      .notNullable()
      .references('id')
      .inTable('ingredient_category')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('ingredient')
}
