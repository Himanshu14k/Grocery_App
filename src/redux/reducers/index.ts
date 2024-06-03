import {combineReducers} from 'redux';
import productReducer from './product';
import bagsReducer from './bags';

const rootReducer = combineReducers({
  productReducer,
  bagsReducer
});

export default rootReducer;
