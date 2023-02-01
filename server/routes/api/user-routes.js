const userController = require('../../controllers/user-controller');

const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')

//Set up GET all and Post at /api/users
router 
    .route('/')
    .get(getAllUser)
    .post(createUser);

//Set up GET one, PUT and DELETE at /api/pizzas/:id
router 
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;