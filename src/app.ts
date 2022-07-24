import express, { Response } from 'express';
import Logger from './logger/winston';

const app = express();

app.get('/', (req: any, res: Response) => {
  res.send(`API RUNNING \n ${new Date()}`);
});

app.listen(3000, () => {
  Logger.info('SERVER RUNNING');
});
