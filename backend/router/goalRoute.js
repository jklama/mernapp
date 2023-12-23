const express = require('express')
const router = express.Router()
const { newGoal } = require('../controller/goalController')

router.post('/admin/goal/new', newGoal)

module.exports = router
