const express = require('express')
const logger = require('./middleware/logger')

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger)
app.use('/api/members', require('./routes/api/members'))

const port = process.env.PORT || 5000


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

