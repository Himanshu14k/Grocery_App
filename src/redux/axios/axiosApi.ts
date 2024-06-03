import {Method} from './apiMethods';

let header1 = {
  'Content-Type': 'multipart/form-data',
};
// 'Accept': 'application/json',
let header2 = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};


export const getProductListApi = (data: any) => Method.GET('products-list', header2);
export const getProductDetailsApi = (data: any) => Method.POST("product-detail", data, header2);
