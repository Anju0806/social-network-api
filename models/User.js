const mongoose = require('mongoose');

// Define the User schema

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-]+@[a-zA-Z\d]+\.[a-zA-Z]{2,}$/ // Regular expression for email validation
  },
  thoughts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought',
  }],
  friends: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
});

// Define the virtual property friendCount
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
});

// Create the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
