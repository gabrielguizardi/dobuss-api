'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/* Onibus */

Route.resource('busses', 'BussController').apiOnly()
Route.resource('busses/locations', 'BussLocationController').apiOnly()
Route.resource('routes', 'RouteController').apiOnly()
