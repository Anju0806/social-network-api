const router = require('express').Router();
const {
 
  addReaction,
  deleteReaction,
} = require('../../controllers/reactionController');

// /api/reactions
//router.route('/').post(addReaction); 

///api/reactions/:reactionId
//router.route('/:reactionId').delete(deleteReaction); 

module.exports = router;
