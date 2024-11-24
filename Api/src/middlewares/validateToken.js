import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config/enviroments.js'

export const authRequired = (req, res, next) => {
  console.log('Cookies', req.cookies)

  const { token } = req.cookies

  if (!token) return res.status(401).json({ error: 'No TOKEN, Unauthorized' })

  jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' })

    console.log('token Decoded', decoded)
    req.userId = decoded.id
    next()
  })
}
