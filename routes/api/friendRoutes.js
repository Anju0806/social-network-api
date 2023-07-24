const router = require('express').Router();
const {
  addFriend,
  deleteFriend,
} = require('../../controllers/friendController');


///api/friends/:userId
router.route('/:userId').delete(deleteFriend).post(addFriend);

module.exports = router;
