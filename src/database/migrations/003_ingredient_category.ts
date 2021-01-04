import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('ingredient_category', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.integer('qty_max').notNullable()
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('ingredient_category')
}
