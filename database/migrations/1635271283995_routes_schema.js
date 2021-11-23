'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoutesSchema extends Schema {
  up () {
    this.create('routes', (table) => {
      table.increments('id')
      table.integer('buss_id').unsigned().references('id').inTable('busses').onUpdate('CASCADE').onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('routes')
  }
}

module.exports = RoutesSchema
