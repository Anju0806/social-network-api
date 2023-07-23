const router = require('express').Router();
const {
  getUser,
  getUsers,
  addUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');


// /api/users
router.route('/').get(getUsers);
/* router.route('/').get(getUsers).post(addUser); */

///api/users/:userId
/* router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser); */



module.exports = router;
