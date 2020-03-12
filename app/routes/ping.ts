import { Router, Request, Response } from 'express';

export default function (router: Router) {
  router.get('/', (req: Request, res: Response) => {
    res.status(200).json('PINGGGG');
  });
}
