import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { FiDollarSign, FiUsers, FiCalendar } from 'react-icons/fi'
import AdminSidebar from '../../components/admin/AdminSidebar'
import BookingChart from '../../components/admin/BookingChart'
import RecentBookings from '../../components/admin/RecentBookings'

const AdminDashboard = () => {
  const { user } = useAuth()
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchStats = async () => {
      try {
        // In a real app, this would be an API call
        const data = {
          totalRevenue: 12500,
          totalBookings: 342,
          activeUsers: 187,
          recentBookings: [
            { id: 1, user: 'John Doe', turf: 'Premium Cricket', date: '2023-06-15', amount: 50 },
            { id: 2, user: 'Jane Smith', turf: 'Football Ground', date: '2023-06-14', amount: 40 },
            { id: 3, user: 'Mike Johnson', turf: 'Cricket Turf', date: '2023-06-14', amount: 45 }
          ],
          bookingTrends: [65, 59, 80, 81, 56, 55, 40]
        }
        setStats(data)
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p>You don't have permission to view this page.</p>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
            <div className="p-4 bg-blue-100 rounded-full mr-4">
              <FiDollarSign className="text-blue-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold">${stats.totalRevenue.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
            <div className="p-4 bg-green-100 rounded-full mr-4">
              <FiCalendar className="text-green-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-500">Total Bookings</p>
              <p className="text-2xl font-bold">{stats.totalBookings}</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
            <div className="p-4 bg-purple-100 rounded-full mr-4">
              <FiUsers className="text-purple-600 text-xl" />
            </div>
            <div>
              <p className="text-gray-500">Active Users</p>
              <p className="text-2xl font-bold">{stats.activeUsers}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Booking Trends</h2>
            <BookingChart data={stats.bookingTrends} />
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
            <RecentBookings bookings={stats.recentBookings} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
