require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const models = require('./models/models.js')
// получить значение порта из переменной окружения
const PORT = process.env.PORT || 5000
// проинициализировать app
const app = express()
const cors = require('cors')
const router = require('./routes/index.js');

// решение проблемы с заголовками cors
app.use(cors())
// подключение express.json(), чтобы сервер мог парсить json-формат
app.use(express.json())
app.use('/api', router)

const start = async () => {
  try {
    await sequelize.authenticate() // функция подключения к базе данных
    await sequelize.sync()  // функция, сверяющая состояние базы данных и схемы, описанной в отдельном js файле
  } catch (e) {
    console.log(e)
  }
  app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
  })
}

start()
