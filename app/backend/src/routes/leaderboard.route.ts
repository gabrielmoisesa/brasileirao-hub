import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardController = new LeaderboardController();

const leaderboardRoute = Router();

leaderboardRoute.get('/home', (req, res) => leaderboardController.getAllHome(req, res));

export default leaderboardRoute;
