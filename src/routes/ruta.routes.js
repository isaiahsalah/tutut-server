import { Router } from "express";
import {
    createRuta,
    getRutas,
    updateRuta,
    deleteRuta,
    getRuta,
    getRutasLinea,
    updateStateRuta
} from "../controllers/ruta.controller.js";

const router = Router();

// Routes
router.get("/", getRutas);
router.post("/", createRuta);
router.put("/:id", updateRuta);
router.delete("/:id", deleteRuta);
router.get("/:id", getRuta);
router.get("/linea/:id", getRutasLinea);
router.get("/:id/:lineaId", updateStateRuta);
export default router;