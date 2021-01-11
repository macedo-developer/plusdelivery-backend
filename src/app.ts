import express from 'express'

import routes from './routes'
import dbConnect from './database/connection'

const app = express()

app.use(routes)

const port = 3003

dbConnect();

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`)
})
