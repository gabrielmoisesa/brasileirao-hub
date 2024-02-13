import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardController = new LeaderboardController();

const leaderboardRoute = Router();

leaderboardRoute.get('/', (req, res) => leaderboardController.getAll(req, res));
leaderboardRoute.get('/home', (req, res) => leaderboardController.getAll(req, res));
leaderboardRoute.get('/away', (req, res) => leaderboardController.getAll(req, res));

export default leaderboardRoute;
