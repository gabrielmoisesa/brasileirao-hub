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

    describe('Validation', () => {
      const invalidFormatMessage = { message: 'Invalid email or password' };

      describe('Email', () => {
        const invalidEmails = [
          '@example.com',
          'mail@example',
          'example@.com',
          'example.example.com',
        ];
        const password = '123456';

        invalidEmails.forEach((invalidEmail) => {
          it(`should return unauthorized if email "${invalidEmail}" has invalid format`, async () => {
            const mockUser = SUserModel.build(UserMock.users[1]);
            sinon.stub(SUserModel, 'findOne').resolves(mockUser);
            sinon.stub(bcrypt, 'compare').resolves(true);

            const { status, body } = await chai
              .request(app)
              .post('/login')
              .send({
                email: invalidEmail,
                password,
              });

            expect(status).to.be.equal(401);
            expect(body).to.be.deep.equal(invalidFormatMessage);
          });
        });

        it('should return unauthorized if email is not found', async () => {
          sinon.stub(SUserModel, 'findOne').resolves(null);

          const { status, body } = await chai
            .request(app)
            .post('/login')
            .send(LoginMock.body);

          expect(status).to.be.equal(401);
          expect(body).to.be.deep.equal(invalidFormatMessage);
        });
      });

      describe('Password', () => {
        const email = LoginMock.body.email;

        it('should return unauthorized if password has invalid format', async () => {
          const mockUser = SUserModel.build(UserMock.users[1]);
          sinon.stub(SUserModel, 'findOne').resolves(mockUser);
          sinon.stub(bcrypt, 'compare').resolves(true);

          const { status, body } = await chai.request(app).post('/login').send({
            email,
            password: '123',
          });

          expect(status).to.be.equal(401);
          expect(body).to.be.deep.equal(invalidFormatMessage);
        });

        it('should return unauthorized if password is incorrect', async () => {
          const mockUser = SUserModel.build(UserMock.users[1]);
          sinon.stub(SUserModel, 'findOne').resolves(mockUser);
          sinon.stub(bcrypt, 'compare').resolves(false);

          const { status, body } = await chai
            .request(app)
            .post('/login')
            .send(LoginMock.body);

          expect(status).to.be.equal(401);
          expect(body).to.be.deep.equal(invalidFormatMessage);
        });
      });
    });
  });
});
