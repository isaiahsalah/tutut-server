import express from "express";
import morgan from "morgan";
import cors from "cors";


// Import routes
import userRoutes from "./routes/user.routes.js";
import internoRoutes from "./routes/interno.routes.js";
import viajeRoutes from "./routes/viaje.routes.js";
import lineaRoutes from "./routes/linea.routes.js";
import gpsRoutes from "./routes/gps.routes.js";
import controlRoutes from "./routes/control.routes.js";
import reseñaRoutes from "./routes/reseña.routes.js";
import rutaRoutes from "./routes/ruta.routes.js";


const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/viaje", viajeRoutes);
app.use("/api/linea", lineaRoutes);
app.use("/api/user", userRoutes);
app.use("/api/interno", internoRoutes);
app.use("/api/gps", gpsRoutes);
app.use("/api/control", controlRoutes);
app.use("/api/reseña", reseñaRoutes);
app.use("/api/ruta", rutaRoutes);


export default app;