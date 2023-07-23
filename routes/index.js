const router = require('express').Router();
const userRoutes = require('./api/userRoutes');
/* const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
 */
router.use('/api/users', userRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
