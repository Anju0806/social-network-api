const mongoose = require('mongoose');

// Reaction Schema 
const reactionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
}, { _id: false }); // Set _id to false to prevent Mongoose from generating separate ids for each reaction

// Thought Schema
const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [reactionSchema], // Array of nested documents (reactions)
});

// Define the virtual property reactionCount
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// Create the Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
