'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BussLocation extends Model {
  buss () {
    return this.belongsTo('App/Models/Buss')
  }
}

module.exports = BussLocation
