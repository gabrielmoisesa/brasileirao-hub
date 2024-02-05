import { Request, Response, Router } from 'express';
import TeamController from '../controllers/TeamController';

const teamController = new TeamController();

const teamRoutes = Router();

teamRoutes.get('/', (req: Request, res: Response) => teamController.getAll(req, res));

export default teamRoutes;
