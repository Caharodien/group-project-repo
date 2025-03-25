<<<<<<< HEAD
=======
import { Request, Response, NextFunction } from "express";
<<<<<<< HEAD
<<<<<<< HEAD
import userService from "../services/user.service";

// Update a user
export async function updateUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await userService.update(req.params.id, req.body);
        res.json({
            message: "User updated successfully",
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                section: user.section
            }
        });
    } catch (error) {
        next(error);
    }
}

// Delete a user
export async function deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
        await userService.delete(req.params.id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        next(error);
=======
import { Schema } from "joi"; 

export function validateRequest(req: Request, res: Response, next: NextFunction, schema: Schema): void {
    const options = {
        abortEarly: false, 
        allowUnknown: true, 
        stripUnknown: true, 
    };

    const { error, value } = schema.validate(req.body, options);

    if (error) {
        return next(`Validation error: ${error.details.map((x) => x.message).join(", ")}`);
    } else {
        req.body = value; 
        next();
>>>>>>> 34d66c1052afae2ae8ae8738f7a18a90baee05ef
    }
=======

export function errorHandler(
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
): void {
    if (typeof err === "string") {
        const is404 = err.toLowerCase().endsWith("not found");
        const statusCode = is404 ? 404 : 400;
        res.status(statusCode).json({ message: err });
        return;
    }

    if (err instanceof Error) {
        res.status(500).json({ message: err.message });
        return;
    }

    res.status(500).json({ message: "An unknown error occurred" });
>>>>>>> main
<<<<<<< HEAD
}
=======
}
>>>>>>> 0519350e270a748a4d959111673102230aff5114
>>>>>>> 34d66c1052afae2ae8ae8738f7a18a90baee05ef
