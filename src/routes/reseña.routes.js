import { Router } from "express";
import {
    createReseña,
    getReseñas,
    updateReseña,
    deleteReseña,
    getReseña
} from "../controllers/reseña.controller.js";

const router = Router();

// Routes
router.get("/", getReseñas);
router.post("/", createReseña);
router.put("/:id", updateReseña);
router.delete("/:id", deleteReseña);
router.get("/:id", getReseña);
export default router;