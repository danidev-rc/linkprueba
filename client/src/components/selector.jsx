import { Link } from 'react-router-dom'
import { Home, Settings, Link2, Bug, Mail, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Selector({ user, email }) {
  const { logout } = useAuth()
  return (
    <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="px-2 py-1.5 text-sm font-normal">
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-medium leading-none">{user}</span>
          <span className="text-xs leading-none text-neutral-400">{email}</span>
        </div>
      </div>
      <hr />
      <div className="py-1">
        <Link
          to="/"
          className="flex items-center px-4 py-2 gap-5 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Home />
          Home
        </Link>
        <Link
          to="/linky"
          className="flex items-center px-4 py-2  gap-5 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Link2 />
          Linky
        </Link>
        <Link
          to="/settings"
          className="flex items-center px-4 py-2  gap-5 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Settings />
          Settings
        </Link>
        <a
          href="mailto:dantesamuelrodriguez@gmail.com"
          className="flex items-center px-4 py-2  gap-5 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Mail />
          Contact
        </a>
        <Link
          to="/settings"
          className="flex items-center px-4 py-2  gap-5 text-sm text-gray-700 hover:bg-gray-100"
        >
          <Bug />
          Report Bug
        </Link>
        <Link
          className="flex items-center px-4 py-2  gap-5 text-sm text-gray-700 hover:bg-gray-100"
          onClick={logout}
        >
          <LogOut />
          Logout
        </Link>
      </div>
    </div>
  )
}
