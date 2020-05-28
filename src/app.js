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



//middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(json());
 // entender los archivos json que le llegue al servidor

// routes

app.use('/api/auth',authRoute);
app.use('/api/roles',roleRoute);
app.use('/api/users',userRoute);
app.use('/api/courses',courseRoute);
app.use('/api/categories',categoryRoute);
app.use('/api/goals',goalRoute);


export default app;
