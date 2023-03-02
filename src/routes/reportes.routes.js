import { Router } from "express";
import {allReportes , createReportes, deleteReportes ,updateReportes} from "../controllers/reportes.controller.js"


const router = Router()

router.get('/reportes',allReportes)

router.post('/reportes', createReportes)

router.put('/reportes', updateReportes)

router.delete('/reportes',deleteReportes)


export default router