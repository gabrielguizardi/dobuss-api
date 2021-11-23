'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/* Onibus */

Route.get('busses', 'BussController.index')
Route.get('busses/:id', 'BussController.show')
Route.post('busses', 'BussController.create')
Route.put('busses/:id', 'BussController.update')
Route.delete('busses/:id', 'BussController.destroy')

/* Localização Onibus */

Route.get('busses/:bussId/location', 'BussLocationController.show')
Route.post('busses/:bussId/locations', 'BussLocationController.create')

/* Pontos de onibus */

Route.get('buss-stops', 'BussStopController.index')
Route.post('buss-stops', 'BussStopController.create')
Route.delete('buss-stops/:id', 'BussStopController.destroy')

/* Pontos de onibus */

Route.get('buss-stops/:bussStopId/routes', 'RouteController.index')
Route.get('routes/:id', 'RouteController.show')
Route.post('routes', 'RouteController.create')
Route.post('routes/:id', 'RouteController.destroy')
