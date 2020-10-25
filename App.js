import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CountersScreen from './src/pages/CountersScreen';
import ConfigScreen from './src/pages/ConfigScreen';
import Store from './src/store'

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Store>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: '#001D47',
              color: '#FFF;'
            },
            activeTintColor: '#FF9500',
            inactiveTintColor: '#8E8E93',
            labelStyle: {
              fontSize: 14,
              fontWeight: 'bold'
            }
          }}>
          <Tab.Screen name="Counters" component={CountersScreen} />
          <Tab.Screen name="Config" component={ConfigScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Store>
  );
};

export default App;