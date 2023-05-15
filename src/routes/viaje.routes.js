import { Router } from "express";
import {
    createViaje,
    getViajes,
    updateViaje,
    deleteViaje,
    getViaje
} from "../controllers/viaje.controller.js";

const router = Router();

// Routes
router.get("/", getViajes);
router.post("/", createViaje);
router.put("/:id", updateViaje);
router.delete("/:id", deleteViaje);
router.get("/:id", getViaje)
export default router;