import express from "express";
<<<<<<< HEAD
import { updateUser, deleteUser } from "../controllers/user.controller";
import Joi from "joi";
=======
import Joi from "joi";
import { getAllUsers, getUserById } from "../controllers/user.controller";
import { updateUser, deleteUser } from "../controllers/user.controller";
>>>>>>> main
import { validateRequest } from "../_middleware/validate-request";

const router = express.Router();

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
    });
    validateRequest(req, res, next, schema);
}

<<<<<<< HEAD
=======


>>>>>>> main
export default router;