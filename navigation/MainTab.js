import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Description, BuyPotion } from '../screens';

const BottomTab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <BottomTab.Navigator 
      tabBarOptions={{
        labelStyle: {
          fontSize: 20,
          marginBottom: 15
        }
      }}
    >
      <BottomTab.Screen name="Description" component={Description} />
      <BottomTab.Screen name="Buy potion" component={BuyPotion} />
    </BottomTab.Navigator>
  );
}

export default MainTab;