const express = require('express')
const router = express.Router()
const { newGoal, getGoal } = require('../controller/goalController')

router.get('/', getGoal)
router.post('/admin/goal/new', newGoal)

module.exports = router
