'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

/* Onibus */

Route.resource('onibus', 'BussController').apiOnly()

/* Localização do ônibus */

Route.post('/onibus/localizacao', () => {
  return { greeting: 'Localizacao' }
})

Route.get('/onibus/:id/localizacao', () => {
  return { greeting: 'Localizacao' }
})

/* Pontos */

Route.get('/pontos', () => {
  return { greeting: 'Pontos' }
})

Route.post('/pontos', () => {
  return { greeting: 'Pontos' }
})

Route.delete('/pontos/:id', () => {
  return { greeting: 'Pontos' }
})

/* Rotas */

Route.get('/rotas', () => {
  return { greeting: 'Rotas' }
})

Route.post('/rotas', () => {
  return { greeting: 'Rotas' }
})

Route.put('/rotas', () => {
  return { greeting: 'Rotas' }
})

Route.delete('/rotas/:id', () => {
  return { greeting: 'Rotas' }
})
