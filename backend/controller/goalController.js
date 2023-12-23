const Goal = require('../model/goalModel')

const newGoal = async (req, res) => {
  const product = await Goal.create(req.body)
  res.status(200).json({
    product,
  })
}

module.exports = {
  newGoal,
}
