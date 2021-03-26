import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './navigation/MainTab';
import PotionsProvider from './store';

const App = () => {
  return (
    <PotionsProvider>
      <NavigationContainer>
        <MainTab />
      </NavigationContainer>
    </PotionsProvider>
  );
};

export default App;