const mongoose = require('mongoose')

const statementSchema = mongoose.Schema({
  label: {
    type: String,
    unique: true
  },
  count: {
    type: Number,
    default: 0
  }
})

const Statement = mongoose.model('Statements', statementSchema)

module.exports = Statement
