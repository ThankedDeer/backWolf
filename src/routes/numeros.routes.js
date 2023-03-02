import { Router } from "express";
import { allNumeros ,addNumeros } from "../controllers/numeros.controllers.js";

//drrf
const router = Router()

router.get('/numeros',allNumeros)

router.post('/numeros',addNumeros)

export default router
