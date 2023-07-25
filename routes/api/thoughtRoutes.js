const router = require('express').Router();
const {
  getThought,
  getThoughts,
  addThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getThought); 

// /api/thoughts/:userId
router.route('/:userId').get(getThought).post(addThought); 

module.exports = router;
