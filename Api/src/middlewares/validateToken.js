import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config/enviroments.js'

export const authRequired = (req, res, next) => {
  try {
    const { token } = req.cookies

    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' })
    }

    jwt.verify(token, TOKEN_SECRET, (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: 'Token is not valid' })
      }
      req.userId = decoded.id
      next()
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
