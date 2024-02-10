import { Router } from 'express';
import LoginController from '../controllers/LoginController';

const loginController = new LoginController();

const loginRoutes = Router();

loginRoutes.post('/', (req, res) => loginController.login(req, res));

export default loginRoutes;
