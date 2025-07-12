import Booking from '../models/Booking.js'
import Turf from '../models/Turf.js'
import User from '../models/User.js'
import { dayStart, dayEnd } from '../utils/date.js'
import mongoose from 'mongoose'

export const createBooking = async (req, res) => {
  try {
    const { turfId, date, timeSlot, userId } = req.body
    
    // Validate turf exists
    const turf = await Turf.findById(turfId)
    if (!turf) {
      return res.status(404).json({ message: 'Turf not found' })
    }

    // Check if slot is available
    const bookingDate = new Date(date)
    const existingBooking = await Booking.findOne({
      turf: turfId,
      date: {
        $gte: dayStart(bookingDate),
        $lte: dayEnd(bookingDate)
      },
      timeSlot,
      status: { $ne: 'cancelled' }
    })

    if (existingBooking) {
      return res.status(400).json({ message: 'Time slot already booked' })
    }

    // Create booking
    const booking = new Booking({
      turf: turfId,
      user: userId,
      date: bookingDate,
      timeSlot,
      price: turf.price,
      status: 'confirmed'
    })

    await booking.save()

    // Update user's bookings
    await User.findByIdAndUpdate(userId, {
      $push: { bookings: booking._id }
    })

    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getTurfAvailability = async (req, res) => {
  try {
    const { turfId, date } = req.params
    const bookingDate = new Date(date)

    // Get all bookings for the day
    const bookings = await Booking.find({
      turf: turfId,
      date: {
        $gte: dayStart(bookingDate),
        $lte: dayEnd(bookingDate)
      }
    })

    // Generate time slots with availability status
    const slots = ['06:00 AM', '08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM', '08:00 PM', '10:00 PM']
      .map(time => ({
        time,
        available: !bookings.some(b => b.timeSlot === time && b.status !== 'cancelled')
      }))

    res.json(slots)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
