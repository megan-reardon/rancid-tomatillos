export const userRatings = (state = [], action) => {
  switch (action.type) {
    case 'GET_RATINGS':
      return action.allRatings
    default:
    return state;
  }
}
