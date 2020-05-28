import {Router} from 'express';
import auth from '../middlewares/auth';

const router = Router();

import {userAuthentication,userAuthenticated} from '../controllers/auth.controller';


router.post('/',userAuthentication);
router.get('/',auth,userAuthenticated);

export default router;