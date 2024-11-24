import { useState, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import Loading from '../components/loading'

function ProtectedRoute() {
  const { isAuthenticated, loading } = useAuth()
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    if (!loading && isAuthenticated) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 250)

      return () => clearTimeout(timer)
    }
  }, [loading, isAuthenticated])

  if (!isAuthenticated && !loading) return <Navigate to="/auth" />

  if (loading || !showContent)
    return (
      <div>
        <Loading />
      </div>
    )

  return <Outlet />
}

export default ProtectedRoute
