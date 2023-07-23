const { User } = require('../models/User');

module.exports = {

    //get all users
    getUsers(req, res) {
        User.find()
          .then((user) => res.json(user))
          .catch((err) => res.status(500).json(err));
      },
    //get one user
    getUser(req, res) {
        User.findOne({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user found with id' })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    //create user
    //update user
    //delete user
}