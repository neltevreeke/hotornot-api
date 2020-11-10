module.exports = app => {
  app.post('/statement', async (req, res, next) => {
    console.log(req.body)

    res.json({})
  })

  return app
}
