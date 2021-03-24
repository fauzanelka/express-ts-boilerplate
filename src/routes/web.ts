import { Response, Router } from 'express';

const router = Router();

router.get('/', (_, res: Response) => {
  return res.send({
    message: '🚀 Express.js is running.',
  });
});

export default router;
