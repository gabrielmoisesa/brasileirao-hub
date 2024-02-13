import { Router } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';

const leaderboardController = new LeaderboardController();

const leaderboardRoute = Router();

['/', '/home', '/away'].forEach((path) =>
  leaderboardRoute.get(path, (req, res) => leaderboardController.getAll(req, res)));

export default leaderboardRoute;
