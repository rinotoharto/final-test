const routes = require('express').Router()
const faveController = require('../controller/faveController')

routes.get('/list', faveController.getFave)
routes.post('/list', faveController.addFave)
routes.delete('/list/:id', faveController.removeFave)

module.exports = routes

