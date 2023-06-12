const defaultState = []

const GET_CATEGORY_PRODUCTS = 'GET_CATEGORY_PRODUCTS'

export const categoryProductsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY_PRODUCTS:
      return [...action.payload.productDtoList]

    default:
      return state
  }
}

export const getCategoryProductsAction = (payload) => ({ type: GET_CATEGORY_PRODUCTS, payload })