const defaultState = []

const GET_CATEGORIES = 'GET_CATEGORIES'
// const GET_CATEGORIES_BY_MAIN = 'GET_CATEGORIES_BY_MAIN'


export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return [...action.payload]
    // case GET_CATEGORIES_BY_MAIN:
    //   return [...action.payload]

    default:
      return state
  }
}

export const getCategoriesAction = (payload) => ({ type: GET_CATEGORIES, payload })
// export const getCategoriesByMainAction = (payload) => ({ type: GET_CATEGORIES, payload })