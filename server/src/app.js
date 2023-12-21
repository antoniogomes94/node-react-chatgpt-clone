const exrpess = require("express")
const cors = require("cors")
const express = require("express")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

module.exports = app