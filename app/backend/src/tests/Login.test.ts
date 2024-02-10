import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import SUserModel from '../database/models/SUserModel';
import UserMock from './mocks/User.mock';
import { app } from '../app';
import LoginMock from './mocks/Login.mock';
import * as bcrypt from 'bcryptjs';

chai.use(chaiHttp);

const { expect } = chai;

describe('Login Test', () => {
  beforeEach(sinon.restore);

  describe('POST /login', () => {
    it('should login with success and return a token', async () => {
      const mockUser = SUserModel.build(UserMock.users[1]);
      sinon.stub(SUserModel, 'findOne').resolves(mockUser);
      sinon.stub(bcrypt, 'compare').resolves(true);
  
      const { status, body } = await chai
        .request(app)
        .post('/login')
        .send(LoginMock.body);
  
      expect(status).to.be.equal(200);
      expect(body).to.have.property('token');
    });
  })
});
