import { Router } from "express";
import {
    createInterno,
    getInternos,
    updateInterno,
    deleteInterno,
    getInterno,
    getInternosUser,
} from "../controllers/interno.controller.js";

const router = Router();

// Routes
router.get("/", getInternos);
router.post("/", createInterno);
router.put("/:id", updateInterno);
router.delete("/:id", deleteInterno);
router.get("/:id", getInterno);
router.get("/user/:userId", getInternosUser);

export default router;