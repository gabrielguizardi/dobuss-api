'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */

/**
 * Resourceful controller for interacting with routes
 */

const Route = use('App/Models/Route')
const RoutesBussStop = use('App/Models/RoutesBussStop')

class RouteController {
  /**
   * @param {object} ctx
   */
  async index () {
    const routes = await Route.all()

    return routes
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async create ({ request }) {
    const data = request.only(['buss_id', 'stops'])

    const route = await Route.create({ buss_id: data.buss_id })

    Promise.all(
      data.stops.map(async (stop, index) => {
        await RoutesBussStop.create({
          buss_stop_id: stop,
          route_id: route.id,
          sequence: index + 1
        })
      })
    )

    return route
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async show ({ params, request }) {
    const route = await Route.findOrFail(params.id)

    return route
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async edit ({ params, request }) {
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async update ({ params, request }) {
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async destroy ({ params, request }) {
  }
}

module.exports = RouteController
