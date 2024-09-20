import express from 'express'
import controller from './controller.js'

const autorRoutes = express.Router()

autorRoutes.post('/actor', controller.handleInsertActorRequest)

autorRoutes.get('/actores', controller.handleGetActoresRequest)

autorRoutes.get('/actor/:id', controller.handleGetActorByIdRequest)

// Tuve que modificar la especificacion de la ruta, ya que de otra forma no me permitia realizar la busqueda
// ya que era la misma direccion de la busqueda por id del actor.
autorRoutes.get('/actores/pelicula/:pelicula', controller.handleGetActoresByPeliculaIdRequest)

export default autorRoutes