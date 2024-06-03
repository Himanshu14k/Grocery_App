import {Height} from '../utils/DevicePixel';

enum routesConstants {
  productList= "ProductList",
  productDetails= "ProductDetails",
  bag= "Bag",
}

const popupType: any = {
  error: 'error',
  info: 'info',
};

enum constants {
  appName = 'Goalsy',
  height50 = 50,
  height40 = 40,
  height30 = 30,
  height20 = 20,
  BottomHeight = Height * 0.08,
  inputHeight = 58,
  screenPadding = 20,
  somethingWentWrong = 'Some thing went wrong.',
  internetCheck="Please check your internet condition",
  modalOuterPadding = 20,
  modalHorizontalPadding = 10,
  progressIconSize = 150,
}

export default constants;

export {popupType, routesConstants};
