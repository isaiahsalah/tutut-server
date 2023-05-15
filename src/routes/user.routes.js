import { Router } from "express";
import {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    getUser,
    getUserLogin
} from "../controllers/user.controller.js";

const router = Router();

// Routes
//router.get("/interno", getUsersInterno);
router.post("/login", getUserLogin);
router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getUser);




export default router;