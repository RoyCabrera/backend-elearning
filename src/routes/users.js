import {Router} from 'express';

const router = Router();

import {getUsers,createUser} from '../controllers/user.controller';

router.get('/',getUsers);
router.post('/',createUser);

export default router;