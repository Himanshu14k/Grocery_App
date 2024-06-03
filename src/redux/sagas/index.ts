import {takeLatest} from 'redux-saga/effects';
import ApiConstants from '../../constants/apiConstants';
import {
  getProductDetailsSaga,
  getProductListSaga,
} from './product';

export function* rootSaga() {
  yield takeLatest(ApiConstants.API_GET_PRODUCT_LIST_LOAD, getProductListSaga);
  yield takeLatest(
    ApiConstants.API_GET_PRODUCT_DETAILS_LOAD,
    getProductDetailsSaga,
  );
}
