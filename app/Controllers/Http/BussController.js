'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Params')} Params */

/**
 * Resourceful controller for interacting with busses
 */
const Buss = use('App/Models/Buss')

class BussController {
  /**
   * @param {object} ctx
   */
  async index () {
    // const busses = await Database.table('busses').innerJoin('routes', 'busses.id', 'routes.buss_id')
    const busses = await Buss.query().with('routes').fetch()

    return busses
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async create ({ request }) {
    const data = request.only(['model', 'brand', 'plate'])

    const buss = await Buss.create(data)

    return buss
  }

  /**
   * @param {object} ctx
   * @param {Params} ctx.params
   */
  async show ({ params: { id } }) {
    const buss = await Buss.findOrFail(id)

    return buss
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Params} ctx.params
   */
  async update ({ params: { id }, request }) {
    const data = request.only(['model', 'brand', 'plate'])

    const buss = await Buss.findOrFail(id)
    buss.merge(data)
    await buss.save()

    return buss
  }

  /**
   * @param {object} ctx
   * @param {Params} ctx.params
   */
  async destroy ({ params: { id } }) {
    const buss = await Buss.findOrFail(id)

    await buss.delete()
  }
}

module.exports = BussController
