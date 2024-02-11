import { Router } from 'express';
import MatchController from '../controllers/MatchController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const matchController = new MatchController();

const matchRoute = Router();

matchRoute.get('/', (req, res) => matchController.getAll(req, res));
matchRoute.use(AuthMiddleware.auth);
matchRoute.patch('/:id', (req, res) => matchController.updateScore(req, res));
matchRoute.patch('/:id/finish', (req, res) => matchController.finishMatch(req, res));

export default matchRoute;
