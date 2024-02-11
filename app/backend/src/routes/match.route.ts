import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchController = new MatchController();

const matchRoute = Router();

matchRoute.get('/', (req, res) => matchController.getAll(req, res));

export default matchRoute;
