import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiStar, FiMapPin, FiCalendar } from 'react-icons/fi'

const TurfCard = ({ turf }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={turf.image}
          alt={turf.name}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div 
          className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-medium flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <FiStar className="text-yellow-500 mr-1" />
          {turf.rating}
        </motion.div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{turf.name}</h3>
        <div className="flex items-center text-gray-600 mb-4">
          <FiMapPin className="mr-1" />
          <span>{turf.location}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">From</p>
            <p className="text-xl font-bold text-blue-600">${turf.price}<span className="text-sm font-normal"> / hr</span></p>
          </div>
          
          <Link
            to="/booking"
            state={{ turf }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center"
          >
            <FiCalendar className="mr-2" />
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default TurfCard
