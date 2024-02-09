import { Request, Response, Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamController = new TeamController();

const teamRoutes = Router();

teamRoutes.get('/', (req: Request, res: Response) => teamController.getAll(req, res));
teamRoutes.get('/:id', (req: Request, res: Response) => teamController.getById(req, res));

export default teamRoutes;
