import { Router } from "express";
import {
    createLinea,
    getLineas,
    updateLinea,
    deleteLinea,
    getLinea,
    getLineaInternos,
    getLineaControl,
} from "../controllers/linea.controller.js";

const router = Router();

// Routes
router.get("/", getLineas);
router.post("/", createLinea);
router.put("/:id", updateLinea);
router.delete("/:id", deleteLinea);
router.get("/:id", getLinea);
router.get("/interno/:id", getLineaInternos);
router.get("/control/:id", getLineaControl);
export default router;