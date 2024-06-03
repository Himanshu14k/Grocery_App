// react
import React from 'react';
// navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routesConstants} from '../constants/constants';
import BookTypes from '../screens/bookTypes';
import BookLists from '../screens/bookList';
import ProductList from '../screens/ProductList';
import ProductDetails from '../screens/ProductDetails';
import Bag from '../screens/Bag';
// constant
// stack
const Stack = createNativeStackNavigator();

// main
const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={routesConstants.productList}
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name={routesConstants.productList} component={ProductList} />
      <Stack.Screen name={routesConstants.productDetails} component={ProductDetails} />
      <Stack.Screen name={routesConstants.bag} component={Bag} />
    </Stack.Navigator>
  );
};

export default MainStack;
