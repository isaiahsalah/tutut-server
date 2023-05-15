import { Router } from "express";
import {
    createGps,
    getGpss
} from "../controllers/gps.controller.js";

const router = Router();

// Routes
router.get("/:internoId", getGpss);
router.post("/", createGps);

export default router;