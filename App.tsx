import React, {useEffect} from 'react';
import {Loader} from './src/components';
import {Platform, StatusBar, View} from 'react-native';
import Routes from './src/navigations/Routes';
import {setDispatch} from './src/utils/globalFunctions';
import { useDispatch } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    setDispatch(dispatch);
  }, []);

  return (
    <View style={{flex: 1}}>
      <Routes />
      <Loader />
      <FlashMessage
        statusBarHeight={StatusBar.currentHeight}
        position="top"
        titleStyle={{
          fontSize: 18,
          color: '#fff',
          textAlign: 'left',
          marginTop: Platform.OS === 'android' ? 0 : 0,
        }}
        textStyle={{
          fontSize: 18,
          color: '#fff',
          textAlign: 'left',
        }}
      />
    </View>
  );
};

export default App;
