import morgan from 'morgan';
import express,{json} from 'express';
import cors from 'cors';

require('dotenv').config()

// importing routes
const app = express();

import authRoute from './routes/auth';
import userRoute from './routes/users';
import roleRoute from './routes/roles';
import courseRoute from './routes/course';
import categoryRoute from './routes/category';
import goalRoute from './routes/goal';
/* import coursesEnrolled from './routes/coursesEnrolled'; */
import coursesEnrolled from './routes/coursesEnrolled';
import cursosImpartidos from './routes/cursosImpartidos';
import editorCodeRoute from './routes/codeEditor';
import commentRoute from './routes/review';
import postsRoute from './routes/post';

//middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(json());
app.use('/uploads',express.static('uploads'))
 // entender los archivos json que le llegue al servidor

// routes

app.use('/api/auth',authRoute);
app.use('/api/roles',roleRoute);
app.use('/api/users',userRoute);
app.use('/api/courses',courseRoute);
app.use('/api/categories',categoryRoute);
app.use('/api/goals',goalRoute);
app.use('/api/reviews',commentRoute);

// Code Editor

app.use('/api/code_editor',editorCodeRoute);

// publicaciones

app.use('/api/posts',postsRoute);


/* app.use('/api/courses_enrolled',coursesEnrolled); */
app.use('/api/cursos_matriculados',coursesEnrolled)
app.use('/api/cursos_impartidos',cursosImpartidos)

export default app;
