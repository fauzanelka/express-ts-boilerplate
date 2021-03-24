import 'dotenv/config';
import express, { Application } from 'express';
import cors from 'cors';
import WebRoutes from './routes/web';
import corsOptions from './config/cors';

const app: Application = express();

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(WebRoutes);

export default app;
