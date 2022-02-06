const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter.js')
const typeRouter = require('./typeRouter.js')
const productRouter = require('./productRouter.js')
const basketRouter = require('./basketRouter.js')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/product', productRouter)
router.use('/basket', productRouter)

module.exports = router;