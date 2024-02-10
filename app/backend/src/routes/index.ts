import { Router } from 'express';
import teamRoutes from './team.route';
import loginRoutes from './login.route';

const router = Router();

router.use('/teams', teamRoutes);
router.use('/login', loginRoutes);

export default router;
