const defaultState = {
  category_title: '',
  category_products: []
}

const GET_CATEGORY_PRODUCTS = 'GET_CATEGORY_PRODUCTS'

export const categoryProductsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORY_PRODUCTS:
      return {
        category_title: action.payload.title,
        category_products: action.payload.productDtoList
      }

    default:
      return state
  }
}

export const getCategoryProductsAction = (payload) => ({ type: GET_CATEGORY_PRODUCTS, payload })