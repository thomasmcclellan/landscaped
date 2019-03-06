'use strict'
import dotenv from 'dotenv'
dotenv.config()
import Sequelize from 'sequelize'
import { dbConfigOptions } from '../config'

const config = dbConfigOptions.development
const sequelize = new Sequelize(process.env.DATABASE_URL || config.url, config)

const db = {
  'sequelize': sequelize,
  'Sequelize': Sequelize,
}

Object.values(db).forEach((model: any) => {
  if (model.associate) {
    model.associate(db)
  }
})

export default db 