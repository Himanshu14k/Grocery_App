import ApiConstants from '../../constants/apiConstants';

export const getProductListAction = () => {
  return {
    type: ApiConstants.API_GET_PRODUCT_LIST_LOAD,
  };
};

export const getProductDetailsAction = (payload: number) => {
  return {
    type: ApiConstants.API_GET_PRODUCT_DETAILS_LOAD,
    payload,
  };
};
