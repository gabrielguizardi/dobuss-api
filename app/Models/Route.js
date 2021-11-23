'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Route extends Model {
  buss () {
    return this.belongsTo('App/Models/Buss')
  }

  bussStops () {
    return this.belongsToMany('App/Models/BussStop').pivotModel('App/Models/RoutesBussStop')
  }
}

module.exports = Route
