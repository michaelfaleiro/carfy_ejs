const routes = require('express').Router();

const userController = require('../controllers/userController')
const { isAuth, isAuthLogin } = require('../middlewares/isAuth')


routes.get("/", isAuthLogin, userController.home)
routes.post('/createuser', userController.createUser)
routes.post('/login',  userController.login)
routes.get('/createuser', userController.createpage)
routes.get('/dashboard',isAuth, userController.dashboard)
routes.get('/logout', userController.logout)    


module.exports = routes;