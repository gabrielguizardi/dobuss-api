'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class RoutesBussStop extends Model {
  route () {
    this.belongsTo('App/Model/Route')
  }

  bussStop () {
    this.belongsTo('App/Model/BussStop')
  }
}

module.exports = RoutesBussStop
