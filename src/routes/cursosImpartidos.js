import {Router} from 'express';

const router = Router();

import {misCursosImpartidos} from '../controllers/course.controller';

router.get('/:id',misCursosImpartidos);



export default router;