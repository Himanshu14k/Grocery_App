import {Dimensions} from 'react-native';

export var dispatch: any = null;

export const setDispatch = (data: any) => {
  dispatch = data;
};

export const width =
  Dimensions.get('screen').height > Dimensions.get('screen').width
    ? Dimensions.get('screen').width
    : Dimensions.get('screen').height;
export const height =
  Dimensions.get('screen').height > Dimensions.get('screen').width
    ? Dimensions.get('screen').height
    : Dimensions.get('screen').width;
