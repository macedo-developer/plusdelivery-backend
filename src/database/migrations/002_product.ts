import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('product', (table) => {
    table.increments('id').primary()

    table.string('name').notNullable()
    table.double('price').notNullable()
    table.double('discount').notNullable()
    table.boolean('active').notNullable().defaultTo(1)

    table
      .integer('id_product_category')
      .notNullable()
      .references('id')
      .inTable('product_category')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('product')
}
