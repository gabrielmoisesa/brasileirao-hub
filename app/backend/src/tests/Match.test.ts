import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import SMatchModel from '../database/models/SMatchModel';
import MatchMock from './mocks/Match.mock';
import { app } from '../app';

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
});
