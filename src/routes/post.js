import {Router} from 'express';

const router = Router();

import {createPost,getPosts} from '../controllers/post.controller';


router.post('/',createPost);
router.get('/',getPosts);

export default router;