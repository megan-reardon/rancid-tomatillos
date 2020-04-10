export const movieRatings = (state = [], action) => {

  switch (action.type) {
    case 'SUBMIT_RATING':
      return [...state, action.rating]
    default:
      return state;
  }

}
