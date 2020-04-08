export const movies = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return [...state, action.movies]
    default:
      return state;
  }
}
