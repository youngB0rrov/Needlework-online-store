require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
// получить значение порта из переменной окружения
const PORT = process.env.PORT || 5000
// проинициализировать app
const app = express()

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
