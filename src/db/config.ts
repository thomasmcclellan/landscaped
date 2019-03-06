import dotenv from 'dotenv'
dotenv.config()

export const dbConfigOptions = {
  'development': {
    'url': process.env.LOCALDBURI,
    'dialect': 'postgres'
  }
}