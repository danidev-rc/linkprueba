import { useState } from 'react'
import { AlertTriangle, Save, Trash2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function SettingsPage() {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    name: 'Dante Rodríguez Chambí',
    email: 'dantesamuelrodriguez@gmail.com',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-neutral-900 text-gray-200 p-6">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">General</h2>
          <p className="text-gray-400 mb-6">
            Update your personal information:
          </p>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Your name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Your email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-gray-700"
                disabled
              />
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                <AlertTriangle className="w-4 h-4" />
                <span>Email address is managed by your OAuth provider.</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Account</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-300 mb-3">Delete account:</h3>
              <button
                type="button"
                className="flex items-center gap-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 px-4 py-2 rounded-md transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                Delete Account
              </button>
            </div>
          </div>
        </section>
      </form>
    </div>
  )
}
