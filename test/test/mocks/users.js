// status property added, waiting for confirmation from BE
export const ERROR = {
  payload: [],
  errors: [
    {
      code: 1,
      message: 'what went wrong',
    },
  ],
  metaData: {
    page: 1,
    pageSize: 100,
    lastPage: 10,
  },
};

export const USERS_OK_PAGE_1 =
{
  payload: [
    {
      username: 'admin',
      registration: '2018-01-08 00:00:00',
      lastLogin: '2018-01-08 00:00:00',
      lastPasswordChange: '2018-01-08 00:00:00',
      status: 'active',
      passwordChangeRequired: true,
    },
    {
      username: 'user1',
      registration: '2018-01-08 00:00:00',
      lastLogin: '2018-01-08 00:00:00',
      lastPasswordChange: '2018-01-08 00:00:00',
      status: 'disabled',
      passwordChangeRequired: true,
    },
  ],
  errors: [],
  metaData: {
    page: 1,
    pageSize: 2,
    lastPage: 2,
    totalItems: 4,
  },
};

export const USERS_OK_PAGE_2 =
{
  payload: [
    {
      username: 'user2',
      registration: '2018-01-08 00:00:00',
      lastLogin: '2018-01-08 00:00:00',
      lastPasswordChange: '2018-01-08 00:00:00',
      status: 'active',
      passwordChangeRequired: true,
    },
    {
      username: 'user3',
      registration: '2018-01-08 00:00:00',
      lastLogin: '2018-01-08 00:00:00',
      lastPasswordChange: '2018-01-08 00:00:00',
      status: 'active',
      passwordChangeRequired: true,
    },
  ],
  errors: [],
  metaData: {
    page: 2,
    pageSize: 2,
    lastPage: 2,
    totalItems: 4,
  },
};

export const USER_PROFILE_MOCK = {
  admin: { username: 'admin', fullName: 'Admin', email: 'admin@test.it' },
  user1: { username: 'user1', fullName: 'User 1', email: 'user1@test.it' },
  user2: { username: 'user2', fullName: 'User 2', email: 'user2@test.it' },
  user3: { username: 'user3', fullName: 'User 3', email: 'user3@test.it' },
};