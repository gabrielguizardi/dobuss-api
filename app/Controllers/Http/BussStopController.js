'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with bussstops
 */
const BussStop = use('App/Models/BussStop')

class BussStopController {
  /**
   * @param {object} ctx
   */
  async index () {
    const bussStop = await BussStop.all()

    return bussStop
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async create ({ request }) {
    const data = request.only(['latitude', 'longitude', 'street_name'])

    const bussStop = await BussStop.create(data)

    return bussStop
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params: { id } }) {
    const buss = await BussStop.findOrFail(id)

    await buss.delete()
  }
}

module.exports = BussStopController
