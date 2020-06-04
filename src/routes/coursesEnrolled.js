import {Router} from 'express';

const router = Router();

import {mycourses} from '../controllers/course.controller';

router.get('/:id',mycourses);



export default router;