import {Router} from 'express';

const router = Router();

import {getUsers,createUser,updateUser,convertirDocente} from '../controllers/user.controller';

router.get('/',getUsers);
router.post('/',createUser);
router.put('/:id',updateUser);
router.put('/convertirse_docente/:id',convertirDocente);

export default router;