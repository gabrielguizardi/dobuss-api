'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Buss extends Model {
  bussLocations () {
    return this.hasMany('App/Model/BussLocation')
  }

  routes () {
    return this.hasMany('App/Model/Routes')
  }
}

module.exports = Buss
