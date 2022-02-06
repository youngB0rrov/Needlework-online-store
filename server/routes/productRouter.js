const Router = require('express')
const router = new Router()
const productRouter = require('../controllers/productController.js')

// routers для создания изделий, получения, а также для получения одного конкретного изделия
router.post('/')
router.get('/')
router.get('/:id')

module.exports = router;