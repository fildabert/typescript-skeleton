/* eslint-disable no-console */
import express, {
  Request, Response, NextFunction, Errback,
} from 'express';
import expressValidator from 'express-validator';
import cuid from 'cuid';
import enrouten from 'express-enrouten';
import { pingLogger } from './libs/boost-logger';

import config from './config';

const PORT = config.get('PORT');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(expressValidator());

console.log(config.get('hello'));


app.use((req: Request, res: Response, next: NextFunction) => {
  req.requestId = cuid();
  next();
});

app.use('/', enrouten({ directory: 'routes' }));

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    message: 'Resource not found.',
  });
});

app.use((err: Errback, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json(err);
});


app.listen(PORT, () => {
  pingLogger();
  console.log(`App is listening on port ${PORT}`);
});
