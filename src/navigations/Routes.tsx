// react
import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
// utils
import {navigationRef} from './navigationServices';
// theme
import MainStack from './stack';

const Routes = () => {
  return (
    <NavigationContainer
      ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};

export default Routes;
