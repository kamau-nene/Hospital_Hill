import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import routeV1 from './routes/v1.js';
import {handleValidationError, errorHandler} from './middlewares/errorHandler.js';


const app= express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1', routeV1);
app.use(errorHandler);
app.use(handleValidationError);

export default app;
