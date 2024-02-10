import { Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamController = new TeamController();

const teamRoutes = Router();

teamRoutes.get('/', (req, res) => teamController.getAll(req, res));
teamRoutes.get('/:id', (req, res) => teamController.getById(req, res));

export default teamRoutes;
