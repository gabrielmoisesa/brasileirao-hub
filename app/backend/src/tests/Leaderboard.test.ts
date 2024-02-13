import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import LeaderboardMock from './mocks/Leaderboard.mock';
import { app } from '../app';
import MatchMock from './mocks/Match.mock';
import TeamMock from './mocks/Team.mock';
import MatchService from '../services/MatchService';
import TeamService from '../services/TeamService';

chai.use(chaiHttp);

const { expect } = chai;

describe('Leaderboard Test', () => {
  beforeEach(sinon.restore);

  describe('GET /leaderboard/home', () => {
    it('should return the performance of the home teams', async () => {
      const mockMatches = MatchMock.matches.slice(0, -1);
      const mockTeams = TeamMock.teams.slice(0, -1);
      sinon.stub(MatchService.prototype, 'getAll').resolves({ status: 'OK', data: mockMatches });
      sinon.stub(TeamService.prototype, 'getAll').resolves({ status: 'OK', data: mockTeams });

      const { status, body } = await chai.request(app).get('/leaderboard/home');

      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(LeaderboardMock.leaderboardHome);
    })
  })
})