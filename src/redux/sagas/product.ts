import {put, call} from 'redux-saga/effects';
import ApiConstants from '../../constants/apiConstants';
import {ShowAlertMessage} from '../../utils/showAlertMessage';
import constants, {popupType} from '../../constants/constants';
import {getProductListApi, getProductDetailsApi} from '../axios/axiosApi';
import networkUtils from '../../utils/networkUtils';

export function* getProductListSaga(action: {payload: any}) {
  try {
    const isConnected = yield call(networkUtils);
    if (isConnected) {
      yield put({
        type: ApiConstants.UPDATE_LOADING_STATE,
        payload: true,
      });            
      let response = yield call(getProductListApi, action?.payload);
      let {result, status} = response;
      yield put({
        type: ApiConstants.UPDATE_LOADING_STATE,
        payload: false,
      });   
      if (status === 1) {
        yield put({
          type: ApiConstants.API_GET_PRODUCT_LIST_SUCCESS,
          payload: result?.data,
        });
      } else if (status === 2) {
        ShowAlertMessage(result.msg, popupType.error);
      } else {
        ShowAlertMessage(result.msg, popupType.error);
      }
    } else {
      ShowAlertMessage(constants.somethingWentWrong, popupType.error);
    }
  } catch (error) {
    yield put({
      type: ApiConstants.UPDATE_LOADING_STATE,
      payload: false,
    });
    ShowAlertMessage(constants.somethingWentWrong, popupType.error);
  }
}

export function* getProductDetailsSaga(action: {payload: any}) {
  try {
    const isConnected = yield call(networkUtils);
    if (isConnected) {
      yield put({
        type: ApiConstants.UPDATE_LOADING_STATE,
        payload: true,
      });      
      console.log("action?.payload", action?.payload);
      let response = yield call(getProductDetailsApi, action?.payload);
      let {result, status} = response;
      console.log("result2",result);
      
      yield put({
        type: ApiConstants.UPDATE_LOADING_STATE,
        payload: false,
      });      
      if (status === 1) {
        yield put({
          type: ApiConstants.API_GET_PRODUCT_DETAILS_SUCCESS,
          payload: result?.data,
        });
      } else if (status === 2) {
        ShowAlertMessage(result.msg, popupType.error);
      } else {
        ShowAlertMessage(result.msg, popupType.error);
      }
    } else {
      ShowAlertMessage(constants.somethingWentWrong, popupType.error);
    }
  } catch (error) {
    yield put({
      type: ApiConstants.UPDATE_LOADING_STATE,
      payload: false,
    });
    ShowAlertMessage(constants.somethingWentWrong, popupType.error);
  }
}
