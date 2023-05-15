import { Router } from "express";
import {
    createControl,
    getControls,
    updateControl,
    deleteControl,
    getControl,
    getControlsLinea
} from "../controllers/control.controller.js";

const router = Router();

// Routes
router.get("/", getControls);
router.post("/", createControl);
router.put("/:id", updateControl);
router.delete("/:id", deleteControl);
router.get("/:id", getControl);
router.get("/linea/:id", getControlsLinea);
export default router;