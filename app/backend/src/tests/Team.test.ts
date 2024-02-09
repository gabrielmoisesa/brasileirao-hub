import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import STeamModel from '../database/models/STeamModel';
import TeamMock from './mocks/Team.mock';
import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Teams Test', () => {
  beforeEach(sinon.restore);

  describe('GET /teams', () => {
    it('should return all teams', async () => {
      const mockTeams = STeamModel.bulkBuild(TeamMock.teams);
      sinon.stub(STeamModel, 'findAll').resolves(mockTeams);

      const { status, body } = await chai.request(app).get('/teams');

      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(TeamMock.teams);
    });
  });

  describe('GET /teams/:id', () => {
    it('should return a team by id', async () => {
      const mockTeam = STeamModel.build(TeamMock.teams[0]);
      sinon.stub(STeamModel, 'findOne').resolves(mockTeam);

      const { status, body } = await chai.request(app).get('/teams/1');

      expect(status).to.be.equal(200);
      expect(body).to.be.deep.equal(TeamMock.teams[0]);
    });
  });
});
