import {Router} from 'express';

const router = Router();

import {guardarComentario,getComments} from '../controllers/review.controller';



router.post('/',guardarComentario);
router.get('/:id',getComments);

export default router;