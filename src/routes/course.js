import {Router} from 'express';


const router = Router();

import {getCourses,getCourse} from '../controllers/course.controller';

router.get('/',getCourses);
router.get('/:id',getCourse);

export default router;