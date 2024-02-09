import { IUser } from '../../Interfaces/users/IUser';

const users: IUser[] = [
  {
    id: 1,
    username: 'admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: 'admin123',
  },
  {
    id: 2,
    username: 'user',
    role: 'user',
    email: 'user@mail.com',
    password: 'password',
  },
];

export default {
  users,
};
