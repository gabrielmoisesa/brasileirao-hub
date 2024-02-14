import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import SMatchModel from '../database/models/SMatchModel';
import MatchMock from './mocks/Match.mock';
import { app } from '../app';
import LoginMock from './mocks/Login.mock';
import JwtUtil from '../utils/JwtUtil';
import STeamModel from '../database/models/STeamModel';
import TeamMock from './mocks/Team.mock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Matches Test', () => {
  beforeEach(sinon.restore);

  describe('GET /matches', () => {
    it('should return all matches', async () => {
      const mockMatches = SMatchModel.bulkBuild(MatchMock.matches);
      sinon.stub(SMatchModel, 'findAll').resolves(mockMatches);

      const { status, body } = await chai.request(app).get('/matches');

      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(MatchMock.matches);
    });
  });

  describe('POST /matches', () => {
    it('should create a new match', async () => {
      const newMatch = SMatchModel.build(MatchMock.matches[0]);
      const mockTeams = STeamModel.bulkBuild(TeamMock.teams);
      sinon.stub(SMatchModel, 'create').resolves(newMatch);
      sinon.stub(STeamModel, 'findByPk').resolves(mockTeams[0]);

      const token = JwtUtil.sign(LoginMock.payload);

      const { status, body } = await chai
        .request(app)
        .post('/matches')
        .set('Authorization', `Bearer ${token}`)
        .send(MatchMock.body);

      expect(status).to.be.equal(201);
      expect(body).to.be.deep.equal(MatchMock.matches[0]);
    })
  })
});
