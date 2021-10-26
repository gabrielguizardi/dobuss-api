'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BussSchema extends Schema {
  up () {
    this.create('busses', (table) => {
      table.increments('id')
      table.string('model', 80)
      table.string('brand', 80)
      table.string('plate', 80)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  down () {
    this.drop('busses')
  }
}

module.exports = BussSchema
