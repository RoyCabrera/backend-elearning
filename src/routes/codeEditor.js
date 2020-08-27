import {Router} from 'express';

const router = Router();

import {getLenguajes,ejecutarCode} from '../controllers/codeEditor.controller';

router.get('/lenguajes',getLenguajes);
router.post('/ejecutar',ejecutarCode);

export default router;