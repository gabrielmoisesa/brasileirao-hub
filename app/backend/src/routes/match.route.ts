import { Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchController = new MatchController();

const matchRoutes = Router();

matchRoutes.get('/', (req, res) => matchController.getAll(req, res));

export default matchRoutes;
