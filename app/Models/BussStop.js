'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BussStop extends Model {
  bussLocations () {
    this.hasMany('App/Model/BussLocation')
  }

  routes () {
    this.hasMany('App/Model/Routes')
  }
}

module.exports = BussStop
