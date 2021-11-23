'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoutesBussStopsSchema extends Schema {
  up () {
    this.create('routes_buss_stops', (table) => {
      table.increments('id')
      table.integer('sequence')
      table.integer('route_id').unsigned().references('id').inTable('routes').onUpdate('CASCADE').onDelete('SET NULL')
      table.integer('buss_stop_id').unsigned().references('id').inTable('buss_stops').onUpdate('CASCADE').onDelete('SET NULL')
      table.timestamps()
    })
  }

  down () {
    this.drop('routes_buss_stops')
  }
}

module.exports = RoutesBussStopsSchema
