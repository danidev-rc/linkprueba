import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { prisma } from '../config/db.js'
import { createAccessToken } from '../libs/jwt.js'
import { TOKEN_SECRET } from '../config/enviroments.js'

export const register = async (req, res) => {
  try {
    const { name, username, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword
      }
    })
    const token = await createAccessToken({ id: newUser.id })
    res.cookie('token', token)
    res.json({ message: 'User registered successfully', user: newUser })
  } catch (error) {
    res.status(400).json({ error: 'Email already in use or invalid data' })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await prisma.user.findUnique({
      where: { email }
    })
    if (!user) return res.status(400).json(['Email not exists'])

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) return res.status(400).json(['Invalid password'])

    const token = await createAccessToken({ id: user.id })

    res.cookie('token', token)
    res.json({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    })
  } catch (error) {
    res.status(400).json({ message: 'Invalid data' })
  }
}

export const verifyToken = async (req, res) => {
  const { token } = req.cookies
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.sendStatus(401)

    const userFound = await prisma.user.findUnique({
      where: { id: user.id }
    })
    if (!userFound) return res.sendStatus(401)

    return res.json({
      id: userFound.id,
      name: userFound.name,
      username: userFound.username,
      email: userFound.email
    })
  })
}

export const logout = async (req, res) => {
  res.clearCookie('token')
  res.json({ message: 'Logout successfully' })
}

export const profile = async (req, res) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  try {
    const decoded = jwt.verify(token, TOKEN_SECRET)
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    })
    res.json({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
