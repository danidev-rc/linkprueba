import { useState } from 'react'
import Selector from '../selector'
import { useAuth } from '../../context/AuthContext'

export default function ButtonUser() {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-9 w-9"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#fff"
            className="w-6 h-6"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </button>
      </div>

      {isOpen && user && <Selector user={user.name} email={user.email} />}
    </div>
  )
}
