import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import xmlParser from 'express-xml-bodyparser';
import routes from './routes';

const app = express();
app.use(cors());
app.use(xmlParser());
app.use(bodyParser.json());

app.use('/api/v1/on-covid-19', routes);

module.exports = app;
