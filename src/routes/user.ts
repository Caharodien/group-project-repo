import express from "express";
<<<<<<< HEAD
<<<<<<< HEAD
import { updateUser, deleteUser } from "../controllers/user.controller";
=======
import { createUser } from "../controllers/user.controller";
>>>>>>> 34d66c1052afae2ae8ae8738f7a18a90baee05ef
import Joi from "joi";
=======
import Joi from "joi";
import { getAllUsers, getUserById } from "../controllers/user.controller";
import { updateUser, deleteUser } from "../controllers/user.controller";
>>>>>>> main
import { validateRequest } from "../_middleware/validate-request";

const router = express.Router();

<<<<<<< HEAD
// Create a new user
router.post("/", createSchema, createUser);

// Validation schema for user creation
function createSchema(req: express.Request, res: express.Response, next: express.NextFunction) {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        section: Joi.string().required(),
=======
// Update a user
router.put("/:id", updateSchema, updateUser);

// Delete a user
router.delete("/:id", deleteUser);

// Validation schema for user update
function updateSchema(req: express.Request, res: express.Response, next: express.NextFunction) {
    const schema = Joi.object({
        firstName: Joi.string().empty(""),
        lastName: Joi.string().empty(""),
        email: Joi.string().email().empty(""),
        section: Joi.string().empty(""),
>>>>>>> main
    });
    validateRequest(req, res, next, schema);
}

<<<<<<< HEAD
=======


>>>>>>> main
export default router;