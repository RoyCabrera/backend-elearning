import {Router} from 'express';

const router = Router();

import {getCategories} from '../controllers/category.controller';

router.get('/',getCategories);


export default router;