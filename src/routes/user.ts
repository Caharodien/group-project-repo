import express from 'express';
import { deleteUser } from '../controllers/userController';

const router = express.Router();

// Route for deleting a user
router.delete('/users/:id', deleteUser);

export default router;