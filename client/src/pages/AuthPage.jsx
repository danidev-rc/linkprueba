import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { signup, isAuthenticated, errors: registerErrors } = useAuth()
  const { signin, errors: loginErrors } = useAuth()

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (isAuthenticated) navigate('/linky')
  }, [isAuthenticated, navigate])

  const onSubmitSignup = handleSubmit(async (values) => {
    signup(values)
  })

  const onSubmitSignin = handleSubmit((data) => {
    signin(data)
  })

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      {isLogin ? (
        <form
          onSubmit={onSubmitSignin}
          className="bg-neutral-900 p-8 border border-neutral-700 rounded-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-semibold text-white mb-6">Login</h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="px-4 py-2 text-white rounded-md hover:bg-neutral-500 focus:outline-none focus:ring-2 transition-colors duration-500"
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-neutral-800 text-white rounded-md flex items-center hover:bg-neutral-600 focus:outline-none focus:ring-2"
            >
              Login
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={onSubmitSignup}
          className="bg-neutral-900 p-8 border border-neutral-700 rounded-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-semibold text-white mb-6">
            Create Account
          </h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              {...register('username', { required: 'Username is required' })}
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="px-4 py-2 text-white rounded-md hover:bg-neutral-500 focus:outline-none focus:ring-2 transition-colors duration-500"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-neutral-800 text-white rounded-md flex items-center hover:bg-neutral-600 focus:outline-none focus:ring-2"
            >
              Register
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
