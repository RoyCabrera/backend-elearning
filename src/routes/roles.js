import {Router} from 'express';


const router = Router();
import {createRole,getRoles,getRole,deletRole,updateRole} from '../controllers/role.controller';

router.post('/',createRole);
router.get('/',getRoles);
router.get('/:id',getRole);
router.delete('/:id',deletRole);
router.put('/:id',updateRole);

export default router;