// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/main/Home';
import Turfs from './pages/main/Turfs';
import Events from './pages/main/Events';
import Contact from './pages/main/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import BookingPage from './pages/booking/BookingPage';
import Success from './pages/booking/Success';
import Dashboard from './pages/admin/Dashboard';
import Profile from './pages/user/Profile';
import Bookings from './pages/user/Bookings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turfs" element={<Turfs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/bookings" element={<Bookings />} />
      </Routes>
    </Router>
  );
};

export default App;
