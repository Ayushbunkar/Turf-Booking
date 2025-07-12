import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { FiCheckCircle, FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'

const BookingSuccess = () => {
  const location = useLocation()
  const booking = location.state?.booking

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">No Booking Found</h2>
          <Link 
            to="/booking" 
            className="text-blue-600 hover:underline"
          >
            Make a new booking
          </Link>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-12 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <div className="text-green-500 flex justify-center mb-6">
              <FiCheckCircle size={64} />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
            <p className="text-lg mb-8">
              Thank you for your booking. Your reservation details are below.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Turf:</span>
                <span className="font-medium">{booking.turf}</span>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Date:</span>
                <span className="font-medium">{booking.date}</span>
              </div>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Time:</span>
                <span className="font-medium">{booking.time}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Amount Paid:</span>
                <span className="font-bold text-blue-600">${booking.price}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <button className="flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-md">
                <FiCalendar className="mr-2" /> Add to Calendar
              </button>
              <button className="flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-md">
                <FiClock className="mr-2" /> Set Reminder
              </button>
              <button className="flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-md">
                <FiMapPin className="mr-2" /> Get Directions
              </button>
            </div>
            
            <div className="flex justify-center space-x-4">
              <Link 
                to="/profile" 
                className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
              >
                View My Bookings
              </Link>
              <Link 
                to="/" 
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BookingSuccess
