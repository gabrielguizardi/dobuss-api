'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BussStop extends Model {
  bussLocations () {
    return this.hasMany('App/Models/BussLocation')
  }

  routes () {
    return this.belongsToMany('App/Models/Route').pivotModel('App/Models/RoutesBussStop')
  }
}

module.exports = BussStop
