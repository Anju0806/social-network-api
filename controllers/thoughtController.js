const Thought = require('../models/Thought');
const {
  updateUser,
} = require('./userController');

module.exports = {
  //get all thoughts
  getThoughts(req, res) {
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
  getThought(req, res) {
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
  addThought(req, res) {
    //craeting a thought
    Thought.create(req.body)
      .then((thought) => {
        // Check if thought is truthy to ensure successful creation
        if (thought) {
          //res.json({ message: 'Thought created'});
         
        } else {
          // This block will be executed only in case of unexpected issues
          res.status(404).json({ message: 'Thought not created' });
        }
      }).then( updateUser(req, res))
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error adding Thought into user' });
      });

  },
  //delete thought
  deleteAllThoughtsOfUser(thoughtIdsToDelete) {

    // deleteMany method delete all thoughts with the IDs
    if (thoughtIdsToDelete) {
      Thought.deleteMany({ _id: { $in: thoughtIdsToDelete } })
        .then(() => {
          res.json({ message: 'All thoughts of the user have been deleted' });
        })
        .catch((err) => {
          console.error(err);
          res.status(500).json({ message: 'Error deleting thoughts of the user' });
        });
    }
    else return;
  }
}