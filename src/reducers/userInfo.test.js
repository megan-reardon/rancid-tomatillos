import { userInfo } from './userInfo';

describe('UserInfo Reducers Test', () => {
  let emptyUserInfo;

  beforeEach(() => {
    emptyUserInfo = {
      id: '',
      name: '',
      email: ''
    }
  })

  it('should return the initial state', () => {
    const result = userInfo(emptyUserInfo, {});
    expect(result).toEqual(emptyUserInfo)
  });

  it('should be able to login', () => {
    const loginAction = {
      type: 'LOGIN',
      userInfo: {
        id: 3,
        name: 'lucy',
        email: 'lucy@turing.io'
      }
    }
    const result = userInfo(emptyUserInfo, loginAction);
    expect(result).toEqual(loginAction.userInfo)
  });

  it('should be able to logout', () => {
    const loggedInUser = {
      id: 3,
      name: 'lucy',
      email: 'lucy@turing.io'
    }
    const logoutAction = {
      type: 'LOGOUT',
      id: 3
    }
    const result = userInfo(loggedInUser, logoutAction)
    expect(result).toEqual(emptyUserInfo);
  })
})
