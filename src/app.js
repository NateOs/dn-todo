import 'source-map-support/register';
import express from 'express';
import setup from './middleware/setup';
import apiRouter from './modules/api/api.routes';
import { errors, status404 } from './middleware/catch';


const app = express();

setup(app);

app.use('/', apiRouter);

status404(app);
errors(app);

export default app;
