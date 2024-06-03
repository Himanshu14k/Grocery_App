import ApiConstants from '../../constants/apiConstants';

export const addItemsInBagAction = (payload: object) => {
  return {
    type: ApiConstants.ADD_ITEM,
    payload
  };
};

export const removeItemsFromBagAction = (payload: any) => {
  return {
    type: ApiConstants.REMOVE_ITEMS,
    payload,
  };
};
