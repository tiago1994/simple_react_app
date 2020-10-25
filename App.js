import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountersScreen from './src/pages/CountersScreen';
import ConfigScreen from './src/pages/ConfigScreen';
import Store from './src/store'
Icon.loadFont();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Store>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: '#001D47',
              color: '#FFF',
              height: 60,
            },
            activeTintColor: '#FF9500',
            inactiveTintColor: '#8E8E93',
            labelStyle: {
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: -10,
              marginBottom: 5
            }
          }}>
          <Tab.Screen
            name="Counters"
            component={CountersScreen}
            options={{
              tabBarLabel: 'Counters',
              tabBarIcon: (tabInfo) => (<Icon name="star" size={22} color={tabInfo.focused?'#FF9500':'#8E8E93'} />)
            }} />
          <Tab.Screen 
            name="Config" 
            component={ConfigScreen}
            options={{
              tabBarLabel: 'Config',
              tabBarIcon: (tabInfo) => (<Icon name="cog" size={22} color={tabInfo.focused?'#FF9500':'#8E8E93'} />)
            }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Store>
  );
};

export default App;