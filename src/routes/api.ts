import { Router} from "express";

import * as TodoController from '../controllers/todoController';

const router = Router();

router.get('/todos', TodoController.all);

router.post('/todo/create', TodoController.create);

router.put('/todo/edit/:id', TodoController.edit);

router.delete('/todo/delete/:id', TodoController.destroy);

router.get('/todo/:id', TodoController.findById)

export default router;