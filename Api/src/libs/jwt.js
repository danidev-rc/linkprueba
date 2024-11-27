import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config/enviroments.js'

export async function createAccessToken (payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: '15m' }, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}

export async function createRefreshToken (payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: '7d' }, (err, token) => {
      if (err) reject(err)
      resolve(token)
    })
  })
}
