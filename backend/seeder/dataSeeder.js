const mongoose = require('mongoose')
const goals = require('./data.js')
const Goal = require('../model/goalModel')
const dotenv = require('dotenv')

dotenv.config()
const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)

    await Goal.deleteMany()
    console.log('products have been deleted')
    await Goal.insertMany(goals)
    console.log('all products have been added')

    process.exit()
  } catch (error) {
    console.log(error.message)
    process.exit()
  }
}

seedProducts()
