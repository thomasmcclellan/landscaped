import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import passport from 'passport'
import compression from 'compression'

dotenv.config({ path: '.env' })

import db from './db/models'
db.sequelize.sync(
  // { force: true }
)

const app = express()

app.set('port', process.env.PORT || 3000)

app.use(compression())
app.use(bodyParser.json())

// app.use(passport.initialize())
// app.use(passport.session())

app.get('/', (req, res) => res.send('works'))

export default app