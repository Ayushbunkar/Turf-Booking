import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const AuthModal = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('login')
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  
  const modalVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', damping: 25 }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <motion.div
        className="fixed inset-0"
        onClick={onClose}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={backdropVariants}
      />
      
      <motion.div
        className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
        variants={modalVariants}
      >
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 font-medium ${activeTab === 'login' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`flex-1 py-4 font-medium ${activeTab === 'register' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>
        
        <div className="p-8">
          <AnimatePresence mode="wait">
            {activeTab === 'login' ? (
              <motion.div
                key="login"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <LoginForm onSuccess={onClose} />
              </motion.div>
            ) : (
              <motion.div
                key="register"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -30, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <RegisterForm onSuccess={onClose} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}

export default AuthModal
