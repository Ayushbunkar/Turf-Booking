import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register a new user
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User  already exists' });
  }

  const user = new User({
    name,
    email,
    password: await bcrypt.hash(password, 10),
  });

  await user.save();
  res.status(201).json({ message: 'User  registered successfully' });
};

// Login user
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '30d' });
  res.json({ token });
};

// Get current user
export const getMe = (req, res) => {
  res.json(req.user);
};
