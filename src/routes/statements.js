const Statement = require('../models/Statement')

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

        // todo: sendEvent to frontend through socket to update highscores
      } else {
        await Statement.updateOne({
          label: statement.label
        }, {
          $inc: { count: 1 }
        })

        // todo: sendEvent to frontend through socket to update highscores
      }
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
