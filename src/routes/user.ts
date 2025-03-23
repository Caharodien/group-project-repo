import express from 'express';
import { getAllUsers, getUserById } from '../controllers/userController';

const router = express.Router();

// Route for listing all users
router.get('/users', getAllUsers);

// Route for retrieving a specific user by ID
router.get('/users/:id', getUserById);

export default router;