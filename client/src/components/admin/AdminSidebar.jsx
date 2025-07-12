import { Link } from 'react-router-dom'
import { FiHome, FiUsers, FiCalendar, FiSettings } from 'react-icons/fi'

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-full">
      <div className="p-4">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav className="mt-4">
        <Link to="/admin/dashboard" className="flex items-center p-4 hover:bg-gray-700">
          <FiHome className="mr-2" />
          Dashboard
        </Link>
        <Link to="/admin/users" className="flex items-center p-4 hover:bg-gray-700">
          <FiUsers className="mr-2" />
          Users
        </Link>
        <Link to="/admin/bookings" className="flex items-center p-4 hover:bg-gray-700">
          <FiCalendar className="mr-2" />
          Bookings
        </Link>
        <Link to="/admin/settings" className="flex items-center p-4 hover:bg-gray-700">
          <FiSettings className="mr-2" />
          Settings
        </Link>
      </nav>
    </aside>
  )
}

export default AdminSidebar
