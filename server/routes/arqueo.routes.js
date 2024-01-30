//funcionaladiad de las rutas dada con las funciones
import { Router } from "express";
import { getArqueos, getArqueo } from "../controllers/arqueo.controllers.js";

const router = Router();

router.get("/arqueos", getArqueos);

router.get("/arqueos/:id", getArqueo);

export default router;