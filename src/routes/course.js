import {Router} from 'express';
import uploader from '../middlewares/multer';

const router = Router();

import {getCourses,getCourse,enrollCourse,createCourse,cambiarEstado} from '../controllers/course.controller';



router.get('/',getCourses);
router.get('/:id',getCourse);
router.post('/enroll',enrollCourse);
router.post('/',uploader.single('image'),createCourse);
router.put('/',cambiarEstado);

export default router;