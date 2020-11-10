const Statement = require('../models/Statement')
const { dispatchEvent } = require('../socketServer')
const EventTypes = require('../constants/EventTypes')

const getHighScores = async () => {
  const results = await Statement.find()
    .sort({
      count: -1
    })
    .select(
      ['-__v', '-_id']
    )
    .lean()
    .exec()

  const n = results.length

  if (n > 4) {
    for (let i = 5; i < n; i++) {
      results.pop()
    }
  }

  return results
}

module.exports = app => {
  app.post('/statement', async (req, res, next) => {
    const {
      statement
    } = req.body

    try {
      const existingStatement = await Statement.findOne({
        label: statement.label
      })

      if (!existingStatement) {
        await Statement.create({
          label: statement.label,
          count: 1
        })
      } else {
        await Statement.updateOne({
          label: statement.label
        }, {
          $inc: { count: 1 }
        })
      }

      const data = await getHighScores()
      dispatchEvent(EventTypes.UPDATE_STATEMENT, data)
    } catch (e) {
      console.log(e)
      const error = new Error('internal-server-error')
      error.statusCode = 500
      return next(error)
    }

    res.json({})
  })

  return app
}
