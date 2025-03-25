<<<<<<< HEAD
=======
import { Request, Response, NextFunction } from "express";
<<<<<<< HEAD
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
>>>>>>> 0519350e270a748a4d959111673102230aff5114
