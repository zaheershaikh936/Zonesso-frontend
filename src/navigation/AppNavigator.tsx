/* eslint-disable prettier/prettier */
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Filter, Home, Product, Showroom, SignUp, SingleProduct } from '../Pages/Index';
import { StackPages } from '../common/stack';

function AppNavigator(): JSX.Element {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={StackPages.SIGNUP}
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'white' },
        headerShown: false,
      }}
    >
      {/* Home */}
      <Stack.Screen
        name={ StackPages.HOME }
        component={Home}
        options={{
          title: 'Home',
        }}
      />

      {/* Sign Up */}
      <Stack.Screen
        name={ StackPages.SIGNUP }
        component={SignUp}
        options={{
          title: 'Sign up',
        }}
      />

      {/* Product */}
      <Stack.Screen
        name={ StackPages.PRODUCT }
        component={Product}
        options={{
          title: 'Product',
        }}
      />

       {/* Filter */}
       <Stack.Screen
        name={ StackPages.FILTER }
        component={Filter}
        options={{
          title: 'Filter',
        }}/>

        {/* Single Page */}
       <Stack.Screen
        name={ StackPages.SINGLEPRODUCT }
        component={SingleProduct}
        options={{
          title: 'Single Product Page',
        }} />


        {/* showroom */}
        <Stack.Screen
          name={StackPages.SHOWROOM}
          component={Showroom}
          options={{
            title: 'Showroom',
          }}
      />

    </Stack.Navigator>
  );
}
export default AppNavigator;
