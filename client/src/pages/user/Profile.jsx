// import { useState, useEffect } from 'react'
// import { useAuth } from '../../contexts/AuthContext'
// import { motion } from 'framer-motion'
// import { FiEdit, FiSave, FiLogOut } from 'react-icons/fi'

// const Profile = () => {
//   const { user, logout, updateProfile } = useAuth()
//   const [editMode, setEditMode] = useState(false)
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: ''
//   })
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         name: user.name || '',
//         email: user.email || '',
//         phone: user.phone || ''
//       })
//     }
//   }, [user])

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSave = async () => {
//     setLoading(true)
//     try {
//       await updateProfile(formData)
//       setEditMode(false)
//     } catch (error) {
//       console.error('Error updating profile:', error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="min-h-screen py-12 bg-gray-50"
//     >
//       <div className="container mx-auto px-4">
//         <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="bg-blue-600 p-6 text-white">
//             <h2 className="text-2xl font-bold">My Profile</h2>
//           </div>
          
//           <div className="p-8">
//             <div className="flex justify-between items-start mb-8">
//               <div className="relative">
//                 <img 
//                   src={user?.photo || '/images/avatar.png'} 
//                   alt="Profile" 
//                   className="w-24 h-24 rounded-full border-4 border-white shadow-md"
//                 />
//                 {editMode && (
//                   <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
//                     <FiEdit />
//                   </button>
//                 )}
//               </div>
              
//               <button
//                 onClick={() => editMode ? handleSave() : setEditMode(true)}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition"
//                 disabled={loading}
//               >
//                 {editMode ? (
//                   <>
//                     <FiSave className="mr-2" /> 
//                     {loading ? 'Saving...' : 'Save Changes'}
//                   </>
//                 ) : (
//                   <>
//                     <FiEdit className="mr-2" /> Edit Profile
//                   </>
//                 )}
//               </button>
//             </div>
            
//             <div className="space-y-6">
//               <div className="border-b pb-4">
//                 <label className="block text-gray-600 mb-1">Full Name</label>
//                 {editMode ? (
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-md"
//                   />
//                 ) : (
//                   <p className="text-lg font-medium">{user?.name}</p>
//                 )}
//               </div>
              
//               <div className="border-b pb-4">
//                 <label className="block text-gray-600 mb-1">Email Address</label>
//                 {editMode ? (
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-md"
//                   />
//                 ) : (
//                   <p className="text-lg font-medium">{user?.email}</p>
//                 )}
//               </div>
              
//               <div className="border-b pb-4">
//                 <label className="block text-gray-600 mb-1">Phone Number</label>
//                 {editMode ? (
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full p-3 border rounded-md"
//                   />
//                 ) : (
//                   <p className="text-lg font-medium">
//                     {user?.phone || 'Not provided'}
//                   </p>
//                 )}
//               </div>
//             </div>
            
//             <div className="mt-8 pt-6 border-t">
//               <button
//                 onClick={logout}
//                 className="px-4 py-2 bg-red-600 text-white rounded-md flex items-center hover:bg-red-700 transition"
//               >
//                 <FiLogOut className="mr-2" /> Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default Profile

import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Profile = () => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl p-4">User  Profile</h1>
      <Footer />
    </div>
  );
};

export default Profile;
