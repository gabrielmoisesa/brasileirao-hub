import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import LeaderboardMock from './mocks/Leaderboard.mock';
import { app } from '../app';
import SMatchModel from '../database/models/SMatchModel';
import MatchMock from './mocks/Match.mock';
import STeamModel from '../database/models/STeamModel';
import TeamMock from './mocks/Team.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Leaderboard Test', () => {
  beforeEach(sinon.restore);

  describe('GET /leaderboard/home', () => {
    it('should return the performance of the home teams', async () => {
      const mockMatches = SMatchModel.bulkBuild(MatchMock.matches);
      const mockTeams = STeamModel.bulkBuild(TeamMock.teams);
      sinon.stub(SMatchModel, 'findAll').resolves(mockMatches);
      sinon.stub(STeamModel, 'findAll').resolves(mockTeams);

      const { status, body } = await chai.request(app).get('/leaderboard/home');

      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(LeaderboardMock.leaderboardHome);
    })
  })
})