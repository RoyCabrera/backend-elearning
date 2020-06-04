import {Router} from 'express';


const router = Router();

import {getCourses,getCourse,enrollCourse,createCourse} from '../controllers/course.controller';

router.get('/',getCourses);
router.get('/:id',getCourse);
router.post('/enroll',enrollCourse);
router.post('/',createCourse);

export default router;