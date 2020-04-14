import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import xmlParser from 'express-xml-bodyparser';
import routes from './routes';
import logRequestDetails from './middlewares';

const app = express();
app.use(cors());
app.use(xmlParser());
app.use(bodyParser.json());
app.use(logRequestDetails);

app.use('/api/v1/on-covid-19', routes);

module.exports = app;
