"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.post('/users', userController_1.createUser);
router.get('/users', userController_1.getUsers);
router.delete('/users/:id', userController_1.deleteUser);
exports.default = router;
