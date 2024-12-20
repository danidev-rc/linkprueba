import { createContext, useContext, useEffect, useState } from 'react'
import {
  loginRequest,
  registerRequest,
  verifyTokenRequest,
  profileRequest,
  refreshTokenRequest,
} from '../api/auth'
import Cookies from 'js-cookie'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([])
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [errors])

  const signup = async (user) => {
    try {
      const res = await registerRequest(user)
      if (res.status === 200) {
        setUser(res.data)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.log(error.response.data)
      setErrors(error.response.data.message)
    }
  }

  const signin = async (user) => {
    try {
      const res = await loginRequest(user)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = async () => {
    try {
      const res = await profileRequest()
      setUser(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    setUser(null)
    setIsAuthenticated(false)
  }

  const refreshToken = async () => {
    try {
      const res = await refreshTokenRequest()
      Cookies.set('token', res.data.token)
    } catch (error) {
      console.log(error)
      setIsAuthenticated(false)
      setUser(null)
    }
  }

  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get()
      if (!cookies.token) {
        setIsAuthenticated(false)
        setLoading(false)
        return
      }

      try {
        const res = await verifyTokenRequest(cookies.token)
        if (!res.data) {
          await refreshToken()
          const newRes = await verifyTokenRequest(Cookies.get('token'))
          setUser(newRes.data)
          setIsAuthenticated(true)
        } else {
          setUser(res.data)
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.log(error)
        setIsAuthenticated(false)
      } finally {
        setLoading(false)
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signup,
        signin,
        logout,
        getUser,
        isAuthenticated,
        errors,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
