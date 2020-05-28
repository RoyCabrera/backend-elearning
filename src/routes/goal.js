import {Router} from 'express';

const router = Router();

import {getGoals} from '../controllers/goal.controller';

router.get('/:id',getGoals);


export default router;