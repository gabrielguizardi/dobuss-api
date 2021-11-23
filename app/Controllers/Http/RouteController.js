'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */

/**
 * Resourceful controller for interacting with routes
 */

const Route = use('App/Models/Route')
const RoutesBussStop = use('App/Models/RoutesBussStop')
const BussStop = use('App/Models/BussStop')

class RouteController {
  /**
   * @param {object} ctx
   */
  async index ({ params: { bussStopId } }) {
    const bussStop = await BussStop.findOrFail(bussStopId)

    const routesBussStops = await bussStop.routes().pivotQuery().with('route').with('route.buss').fetch()

    return routesBussStops.toJSON().map((routesBussStop) => routesBussStop.route)
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
   * @param {Params} ctx.params
   */
  async show ({ params: { id } }) {
    const route = await Route.findOrFail(id)

    const bussStops = await route.bussStops().fetch()
    const buss = await route.buss().fetch()

    return {
      ...route.toJSON(),
      buss,
      buss_stops: bussStops
    }
  }

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async destroy ({ params: { id } }) {
    const route = await Route.findOrFail(id)

    return await route.delete()
  }
}

module.exports = RouteController
