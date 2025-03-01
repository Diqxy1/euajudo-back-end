import express from 'express';
import cors from 'cors'
import './database/connection'
import routes from './routes/routes';

const app = express();
app.use(express.json());

app.use(cors())
app.use(routes);
app.listen(8080);