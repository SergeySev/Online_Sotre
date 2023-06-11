const defaultState = []

const GET_SUBCATEGORIES_BY_MAIN = 'GET_SUBCATEGORIES_BY_MAIN';

export const subCategoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_SUBCATEGORIES_BY_MAIN:
      return [...action.payload.subCategories]

    default:
      return state;
  }
}

export const getSubcategoriesByMainAction = (payload) => ({ type: GET_SUBCATEGORIES_BY_MAIN, payload })
// export const getSubcategoriesByMainAction = (payload) => ({ type: GET_SUBCATEGORIES, payload })