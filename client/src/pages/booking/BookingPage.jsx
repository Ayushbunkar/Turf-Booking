// import { useState, useEffect } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
// import { FiCalendar, FiClock, FiInfo } from 'react-icons/fi'
// import StripePayment from '../../components/payment/StripePayment'
// import { useAuth } from '../../contexts/AuthContext'

// const BookingPage = () => {
//   const { user } = useAuth()
//   const location = useLocation()
//   const navigate = useNavigate()
//   const [turf, setTurf] = useState(location.state?.turf || null)
//   const [date, setDate] = useState(null)
//   const [timeSlot, setTimeSlot] = useState('')
//   const [price, setPrice] = useState(0)
//   const [step, setStep] = useState(1)

//   const timeSlots = [
//     '06:00 AM', '08:00 AM', '10:00 AM', 
//     '12:00 PM', '02:00 PM', '04:00 PM', 
//     '06:00 PM', '08:00 PM', '10:00 PM'
//   ]

//   const handlePaymentSuccess = () => {
//     navigate('/booking/success', {
//       state: { 
//         booking: { 
//           turf: turf.name, 
//           date: date.toDateString(), 
//           time: timeSlot,
//           price 
//         }
//       }
//     })
//   }

//   useEffect(() => {
//     if (date && timeSlot && turf) {
//       const hours = parseInt(timeSlot.split(':')[0])
//       const peakRate = hours >= 16 && hours <= 20
//       setPrice(peakRate ? turf.price * 1.2 : turf.price)
//     }
//   }, [date, timeSlot, turf])

//   if (!turf) {
//     navigate('/turfs')
//     return null
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-screen py-12 bg-gray-50"
//     >
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="p-8">
//             <div className="flex justify-between items-center mb-8">
//               <h2 className="text-2xl font-bold">Book {turf.name}</h2>
//               <div className="text-gray-500">
//                 Step {step} of 2
//               </div>
//             </div>
            
//             <div className="mb-8">
//               <div className="flex space-x-4 mb-6">
//                 {['1', '2'].map((i) => (
//                   <div 
//                     key={i}
//                     className={`flex-1 h-2 rounded-full ${step >= parseInt(i) ? 'bg-blue-600' : 'bg-gray-200'}`}
//                   />
//                 ))}
//               </div>
//             </div>

//             {step === 1 ? (
//               <>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
//                   <div>
//                     <label className="block text-gray-700 mb-2 font-medium">Select Date</label>
//                     <div className="relative">
//                       <DatePicker
//                         selected={date}
//                         onChange={setDate}
//                         minDate={new Date()}
//                         className="w-full p-4 border border-gray-300 rounded-lg"
//                         placeholderText="Select date"
//                         required
//                       />
//                       <FiCalendar className="absolute right-4 top-4 text-gray-400" />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 mb-2 font-medium">Time Slot</label>
//                     <div className="relative">
//                       <select
//                         value={timeSlot}
//                         onChange={(e) => setTimeSlot(e.target.value)}
//                         className="w-full p-4 border border-gray-300 rounded-lg appearance-none"
//                         required
//                       >
//                         <option value="">Select time slot</option>
//                         {timeSlots.map(slot => (
//                           <option key={slot} value={slot}>{slot}</option>
//                         ))}
//                       </select>
//                       <FiClock className="absolute right-4 top-4 text-gray-400" />
//                     </div>
//                   </div>
//                 </div>

//                 {date && timeSlot && (
//                   <div className="bg-blue-50 p-4 rounded-lg mb-8">
//                     <div className="flex items-center text-blue-800">
//                       <FiInfo className="mr-2" />
//                       <p>Your booking cost: <span className="font-bold">${price.toFixed(2)}</span></p>
//                     </div>
//                   </div>
//                 )}

//                 <div className="flex justify-end">
//                   <button
//                     onClick={() => setStep(2)}
//                     disabled={!date || !timeSlot}
//                     className={`px-6 py-3 rounded-lg ${date && timeSlot ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
//                   >
//                     Continue to Payment
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <div>
//                 <div className="mb-6">
//                   <h3 className="text-lg font-semibold mb-2">Booking Summary</h3>
//                   <div className="bg-gray-50 p-4 rounded-lg">
//                     <p>Turf: <span className="font-medium">{turf.name}</span></p>
//                     <p>Date: <span className="font-medium">{date?.toDateString()}</span></p>
//                     <p>Time: <span className="font-medium">{timeSlot}</span></p>
//                     <p className="mt-2">Total: <span className="font-bold text-blue-600">${price.toFixed(2)}</span></p>
//                   </div>
//                 </div>

//                 {user ? (
//                   <StripePayment 
//                     amount={price * 100} 
//                     onSuccess={handlePaymentSuccess} 
//                   />
//                 ) : (
//                   <div className="text-center py-8">
//                     <p className="mb-4">Please login to complete your booking</p>
//                     <button
//                       onClick={() => navigate('/login', { state: { from: location } })}
//                       className="px-6 py-2 bg-blue-600 text-white rounded-lg"
//                     >
//                       Login
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default BookingPage

import React, { useState } from 'react';
import BookingCard from '../../components/booking/BookingCard';
import DatePicker from '../../components/booking/DatePicker';
import TimeSlot from '../../components/booking/TimeSlot';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const turfs = [
    { name: 'Turf 1', description: 'Description of Turf 1' },
    { name: 'Turf 2', description: 'Description of Turf 2' },
    { name: 'Turf 3', description: 'Description of Turf 3' },
  ];

  return (
    <div>
      <Header />
      <h1 className="text-3xl p-4">Book Your Turf</h1>
      <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <div className="flex flex-wrap">
        {turfs.map((turf, index) => (
          <BookingCard key={index} turf={turf} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
