'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RoutesBussStop extends Model {
  route () {
    return this.belongsTo('App/Models/Route')
  }

  bussStop () {
    return this.belongsTo('App/Models/BussStop')
  }
}

module.exports = RoutesBussStop
