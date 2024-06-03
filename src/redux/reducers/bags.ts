import ApiConstants from '../../constants/apiConstants';

const initialState = {
  bags: []
};

function bagsReducer(state = initialState, action: any) {
  switch (action.type) {
    case ApiConstants.ADD_ITEM:      
      const itemExists = state.bags.some(item => item?.id === action.payload?.id);
      if (itemExists) {
        return state;
      }
      return {
        ...state,
        bags: [...state.bags, action.payload],
      };

    case ApiConstants.REMOVE_ITEMS:      
      return {
        ...state,
        bags: state?.bags?.filter(item => item?.id !== action.payload),
      };

    default:
      return state;
  }
}

export default bagsReducer;
