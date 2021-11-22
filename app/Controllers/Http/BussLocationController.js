'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Params')} Params */

/**
 * Resourceful controller for interacting with busslocations
 */
const BussLocation = use('App/Models/BussLocation')

class BussLocationController {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Params} ctx.params
   */
  async create ({ params: { bussId }, request }) {
    const data = request.only(['latitude', 'longitude'])

    const bussLocation = await BussLocation.create({ ...data, buss_id: bussId })

    return bussLocation
  }

  /**
   * @param {object} ctx
   * @param {Params} ctx.params
   */
  async show ({ params: { bussId } }) {
    const bussLocation = await BussLocation
      .query()
      .where('buss_id', '=', bussId)
      .orderBy('created_at', 'desc')
      .limit(1)
      .fetch()

    return bussLocation
  }
}

module.exports = BussLocationController
