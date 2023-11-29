const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// localhost:3001/api/user

router.route('/')
.get(getUsers)
.post(createUser);

// /api/user/:userId
router.route('/:userId')
.get(getSingleUser)
.delete(deleteUser)
.put(updateUser);

// /api/students/:studentId/assignments
router.route('/:userId/friends/:friendId').post(addFriend);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignments/:assignmentId').delete(removeFriend);

module.exports = router;
