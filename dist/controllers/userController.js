"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsers = exports.createUser = void 0;
const db_1 = require("../config/db");
// Create User
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, age } = req.body;
    const [result] = yield db_1.pool.query('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, age]);
    res.status(201).json({ message: 'User created', userId: result.insertId });
});
exports.createUser = createUser;
// Get All Users
const getUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield db_1.pool.query('SELECT * FROM users');
    res.json(rows);
});
exports.getUsers = getUsers;
// Delete User
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield db_1.pool.query('DELETE FROM users WHERE id = ?', [id]);
    res.json({ message: 'User deleted' });
});
exports.deleteUser = deleteUser;
