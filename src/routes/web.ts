import { Response, Router } from 'express';

const router = Router();

router.get('/', (_, res: Response) => {
  return res.send({
    message: `🚀 Express.js is listening on port ${process?.env?.PORT || 3000}.`,
  });
});

export default router;
