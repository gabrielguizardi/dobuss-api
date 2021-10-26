'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BussLocationSchema extends Schema {
  up () {
    this.create('buss_locations', (table) => {
      table.increments('id')
      table.string('latitude', 20)
      table.string('longitude', 20)
      table.integer('buss_id').unsigned().references('id').inTable('busses')
      table.timestamps()
    })
  }

  down () {
    this.drop('buss_locations')
  }
}

module.exports = BussLocationSchema
