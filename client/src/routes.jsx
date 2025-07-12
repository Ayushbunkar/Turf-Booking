import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/main/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/admin/Dashboard'
import Bookings from './pages/admin/Bookings'
import Users from './pages/admin/Users'
import BookingPage from './pages/booking/BookingPage'
import Success from './pages/booking/Success'
import Profile from './pages/user/Profile'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/bookings" element={<Bookings />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/booking/success" element={<Success />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes
