import { Request, Response } from 'express';
import { pool } from '../config/db';
import { User } from '../models/user';

// Create User
export const createUser = async (req: Request, res: Response) => {
    const { name, email, age } = req.body;
    const [result] = await pool.query('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, age]);
    res.status(201).json({ message: 'User created', userId: (result as any).insertId });
};

// Get All Users
export const getUsers = async (_req: Request, res: Response) => {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
};

// Delete User
export const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
    res.json({ message: 'User deleted' });
};
