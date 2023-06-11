const defaultState = [];

const GET_BRANDS = 'GET_BRANDS';

export const brandReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BRANDS:
      return [...action.payload.content]

    default:
      return state
  }
}

export const getBrandsAction = (payload) => ({ type: GET_BRANDS, payload })