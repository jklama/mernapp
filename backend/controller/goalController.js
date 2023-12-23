const Goal = require('../model/goalModel')

const getGoal = async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json({
    goals,
  })
}

const newGoal = async (req, res) => {
  const product = await Goal.create(req.body)
  res.status(200).json({
    product,
  })
}

const updateGoal = async (req, res) => {
  const { id: goalId } = req.params
  const goal = await Goal.findOneAndUpdate({ _id: goalId }, req.body, {
    new: true,
    runValidators: true,
  })
  if (!goal) {
    return res.status(404).json({ msg: 'Goal not found' })
  }
}

module.exports = {
  newGoal,
  getGoal,
}
