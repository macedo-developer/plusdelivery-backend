import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('product_ingredient', (table) => {
    table.increments('id').primary()
    table
      .integer('id_product')
      .notNullable()
      .references('id')
      .inTable('product')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    table
      .integer('id_ingredient')
      .notNullable()
      .references('id')
      .inTable('ingredient')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}
