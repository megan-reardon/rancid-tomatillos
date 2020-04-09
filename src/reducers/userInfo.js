const emptyUserInfo = {
  id: '',
  name: '',
  email: ''
}

export const userInfo = (state = emptyUserInfo, action) => {
  switch (action.type) {
    case 'LOGIN':
      return state = action.userInfo;
    default:
      return state;
  }
}
