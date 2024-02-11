import { Router } from 'express';
import teamRoutes from './team.route';
import loginRoutes from './login.route';
import matchRoutes from './match.route';

const router = Router();

router.use('/teams', teamRoutes);
router.use('/login', loginRoutes);
router.use('/matches', matchRoutes);

export default router;
