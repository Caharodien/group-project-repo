import { Request, Response, NextFunction } from "express";
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
}