import UserMock from './User.mock';

const { email, password } = UserMock.users[1];

const body = {
  email,
  password,
};

const payload = { id: 1, role: 'admin' };

export default {
  body,
  payload,
};
