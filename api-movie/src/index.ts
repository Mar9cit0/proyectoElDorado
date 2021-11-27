require('dotenv').config();
import 'reflect-metadata';
import express from 'express';

import './database/connect'
import routes from './routes/routes'

const app = express();

app.use(express.json());
app.use(routes);
app.listen(3000, () => console.log('Conect port', 3000));