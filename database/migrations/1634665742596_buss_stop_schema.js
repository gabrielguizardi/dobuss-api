'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BussStopSchema extends Schema {
  up () {
    this.create('buss_stops', (table) => {
      table.increments('id')
      table.string('street_name', 80)
      table.string('latitude', 20)
      table.string('longitude', 20)
      table.timestamps()
    })
  }

  down () {
    this.drop('buss_stops')
  }
}

module.exports = BussStopSchema
