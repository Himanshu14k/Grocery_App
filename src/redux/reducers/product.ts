import ApiConstants from '../../constants/apiConstants';

const initialState = {
  isLoading: false,
  productDetails: {},
  productList: [],
};

function productReducer(state = initialState, action: any) {
  switch (action.type) {
    case ApiConstants.UPDATE_LOADING_STATE:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ApiConstants.API_GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: action.payload,
      };

    case ApiConstants.API_GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.payload,
      };

    default:
      return state;
  }
}

export default productReducer;
