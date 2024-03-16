// controllers/adminController.js

const User = require('../models/User');

exports.viewUsers = async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching users' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    // Delete the user
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting user' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;
    // Update the user role
    await User.findByIdAndUpdate(userId, { role });
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating user' });
  }
};
