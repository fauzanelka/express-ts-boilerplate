import 'dotenv/config';
import express, { Application } from 'express';
import cors from 'cors';
import { Server } from 'http';
import WebRoutes from './routes/web';
import corsOptions from './config/cors';

const app: Application = express();

export let server: Server;

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(WebRoutes);

export default app;
