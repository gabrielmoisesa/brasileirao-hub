import UserMock from './User.mock';

const { email, password } = UserMock.users[1];

const body = {
  email,
  password,
};

export default {
  body,
};
