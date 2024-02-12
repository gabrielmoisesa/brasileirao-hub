import { Router } from 'express';
import MatchController from '../controllers/MatchController';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const matchController = new MatchController();

const matchRoute = Router();

matchRoute.get('/', (req, res) => matchController.getAll(req, res));
matchRoute.patch('/:id', AuthMiddleware.auth, (req, res) => matchController.updateScore(req, res));
matchRoute.patch('/:id/finish', AuthMiddleware.auth, (req, res) =>
  matchController.finishMatch(req, res));
matchRoute.post('/', AuthMiddleware.auth, (req, res) => matchController.create(req, res));

export default matchRoute;
