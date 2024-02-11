import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import LoginMiddleware from '../middlewares/LoginMiddleware';
import AuthMiddleware from '../middlewares/AuthMiddleware';

const loginController = new LoginController();

const loginRoute = Router();

loginRoute.post('/', LoginMiddleware.validateBody, (req, res) => loginController.login(req, res));
loginRoute.get('/role', AuthMiddleware.auth, (req, res) => LoginController.getRole(req, res));

export default loginRoute;
