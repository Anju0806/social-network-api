const  Thought  = require('../models/Thought');
const  User  = require('../models/User');

module.exports = {
     //get all thoughts
    getThoughts(req, res){
        Thought.find()
          .then((thoughts) => {
            if (thoughts.length === 0) {
              // If no thoughts found, send a 404 response with a message
              res.status(404).json({ message: 'No thoughts yet' });

            } else {
              // If thoughts found, send the users in the response
              res.json(thoughts);
            }
          })
          .catch((err) => res.status(500).json(err));

    },

     //get one thought
    getThought(req, res){
        Thought.findOne({ _id: req.params.thoughtId })
          .then((thought) => {
            if (!thought) {
              // If no thought found, send a 404 response with a message
              res.status(404).json({ message: 'No thought found with the provided thoughtId' });
            } else {
              // If a user is found, send the user data in the response
              res.json(thought);
            }
          })
          .catch((err) => res.status(500).json(err));

    },
    addThought(req, res){
        //craeting a thought
        const newThought = new Thought({
            thoughtText: req.body.thoughtText,
            username: req.body.username, // Assuming you have a username field in the request body
          });
          Thought.create(req.body);
          //Find the user by their ID
          User.findOne({ _id: req.params.userId })
            .then((user) => {
              if (!user) {
                return res.status(404).json({ message: 'User not found' });
              }
              
              // Adding the ID of the new thought to the user's thoughts array
              user.thoughts.push(newThought._id);
        
              // update associated user
              return user.save();
            })
            .then((updatedUser) => {
              // Return the response with the updated user and the new thought
              res.json({ message: 'Thought added to user', user: updatedUser, thought: newThought });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).json({ message: 'Error adding thought to user' });
            });
    },
}