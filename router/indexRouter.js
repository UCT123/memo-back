import { response, Router } from "express";
import eventsController from "../controllers/ejemploController.js";

const indexRouter  = Router();
const { getHola } = eventsController

indexRouter.get('/', (req, res ) => {
    res.send('bienvenido a mi servidor en /api')
})

indexRouter.get('/ejemplo', getHola)

export default indexRouter