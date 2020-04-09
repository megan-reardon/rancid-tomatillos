const emptyUserInfo = {
  id: '',
  name: '',
  email: '',
  password: ''
}

export const userInfo = (state = emptyUserInfo, action) => {
  // const {id, name, email, password } = action.userInfo;
  console.log(action.userInfo);
  switch (action.type) {
    case 'LOGIN':
      return state = action.userInfo;
    default:
      return state;
  }

}
