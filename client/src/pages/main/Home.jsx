// // import { motion } from 'framer-motion'
// // import { Link } from 'react-router-dom'
// // import { FiCalendar, FiMapPin, FiClock } from 'react-icons/fi'
// // import TurfCard from '../../components/booking/TurfCard'
// // import HeroSection from '../../components/HeroSection'

// // const Home = () => {
// //   const featuredTurfs = [
// //     {
// //       id: 1,
// //       name: "Premium Cricket Turf",
// //       location: "Downtown",
// //       price: 50,
// //       rating: 4.8,
// //       image: "/images/turfs/cricket.jpg"
// //     },
// //     {
// //       id: 2,
// //       name: "Elite Football Ground",
// //       location: "Westside",
// //       price: 40,
// //       rating: 4.7,
// //       image: "/images/turfs/football.jpg"
// //     }
// //   ]

// //   return (
// //     <div className="min-h-screen">
// //       <HeroSection 
// //         title="Book Premium Sports Turfs"
// //         subtitle="Find and book the best turfs in your city"
// //         ctaText="Book Now"
// //         ctaLink="/booking"
// //       />
      
// //       <motion.section 
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ delay: 0.2 }}
// //         className="py-12 container mx-auto px-4"
// //       >
// //         <div className="text-center mb-12">
// //           <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {[
// //               { icon: <FiCalendar size={40} />, title: "Easy Booking", desc: "Book in just a few clicks" },
// //               { icon: <FiMapPin size={40} />, title: "Prime Locations", desc: "Turfs across the city" },
// //               { icon: <FiClock size={40} />, title: "Flexible Timing", desc: "24/7 availability" }
// //             ].map((feature, i) => (
// //               <motion.div 
// //                 key={i}
// //                 whileHover={{ scale: 1.05 }}
// //                 className="bg-white p-6 rounded-lg shadow-md"
// //               >
// //                 <div className="text-blue-600 mb-4">{feature.icon}</div>
// //                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
// //                 <p className="text-gray-600">{feature.desc}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="mb-12">
// //           <h2 className="text-3xl font-bold mb-8 text-center">Featured Turfs</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //             {featuredTurfs.map(turf => (
// //               <TurfCard key={turf.id} turf={turf} />
// //             ))}
// //           </div>
// //           <div className="text-center mt-8">
// //             <Link 
// //               to="/turfs" 
// //               className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
// //             >
// //               View All Turfs
// //             </Link>
// //           </div>
// //         </div>
// //       </motion.section>
// //     </div>
// //   )
// // }

// // export default Home
// import { motion } from 'framer-motion'
// import ImageCarousel from '../../components/ui/ImageCarousel'
// import TurfCard from '../../components/booking/TurfCard'

// const Home = () => {
//   const featuredTurfs = [
//     {
//       id: 1,
//       name: "Premium Cricket Turf",
//       location: "Downtown",
//       price: 50,
//       rating: 4.8,
//       image: "/images/turfs/cricket.jpg"
//     },
//     {
//       id: 2,
//       name: "Elite Football Ground",
//       location: "Westside",
//       price: 40,
//       rating: 4.7,
//       image: "/images/turfs/football.jpg"
//     }
//   ]

//   const carouselImages = [
//     { src: "/images/hero/turf1.jpg", alt: "Turf 1", caption: "Book Your Turf Today!" },
//     { src: "/images/hero/turf2.jpg", alt: "Turf 2", caption: "Best Facilities Available!" },
//     { src: "/images/hero/turf3.jpg", alt: "Turf 3", caption: "Join Us for a Game!" }
//   ]

//   return (
//     <div className="min-h-screen">
//       <ImageCarousel images={carouselImages} />
      
//       <motion.section 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.2 }}
//         className="py-12 container mx-auto px-4"
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center">Featured Turfs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {featuredTurfs.map(turf => (
//             <TurfCard key={turf.id} turf={turf} />
//           ))}
//         </div>
//       </motion.section>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl p-4">Welcome to Turf Booking</h1>
      <Footer />
    </div>
  );
};

export default Home;
