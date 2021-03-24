const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

app.get("/", async (req, res) => {
    res.status(200).json("app works.");
  });

module.exports = app
