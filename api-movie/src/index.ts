require('dotenv').config();
var cors = require('cors');
import 'reflect-metadata';
import express from 'express';

import './database/connect'
import routes from './routes/routes'

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors(corsOptions));
app.listen(3000, () => console.log('Conect port', 3000));
