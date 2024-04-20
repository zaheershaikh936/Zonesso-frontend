/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

function App(): JSX.Element {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
