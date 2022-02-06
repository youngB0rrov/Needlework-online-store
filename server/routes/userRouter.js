const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController.js')

// routers для регистрации и авторизации пользователя
router.post('/registration',)
router.post('/login',)
// router для проверки, зарегистрирован ли пользователь по jwt-токену
router.get('/auth', userController.checkAuth)


module.exports = router;
