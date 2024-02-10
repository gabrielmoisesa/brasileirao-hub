import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import LoginMiddleware from '../middlewares/LoginMiddleware';

const loginController = new LoginController();

const loginRoutes = Router();

loginRoutes.post('/', LoginMiddleware.validateBody, (req, res) => loginController.login(req, res));

export default loginRoutes;
