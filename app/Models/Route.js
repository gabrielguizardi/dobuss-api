'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Route extends Model {
  buss () {
    this.belongsTo('App/Model/Buss')
  }

  bussStops () {
    this.hasMany('App/Model/RoutesBussStop')
  }
}

module.exports = Route
