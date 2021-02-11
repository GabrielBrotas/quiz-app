import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import './database/connection';

const app = express();
app.use(bodyParser.json());

app.use(routes);

app.listen(3333, () => {
    console.log('server runing in port 3333')
})