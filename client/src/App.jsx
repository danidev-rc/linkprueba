import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import LinkyPage from './pages/LinkPage'
import ProtectedRoute from './routes/ProtectedRoute'

import { AuthProvider } from './context/AuthContext'
import { LinkProvider } from './context/LinkContext'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvider>
        <LinkProvider>
          <BrowserRouter>
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/linky" element={<LinkyPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Route>
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </LinkProvider>
      </AuthProvider>
    </div>
  )
}

export default App
