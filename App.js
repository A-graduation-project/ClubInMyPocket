import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeStack from './src/components/HomeStack';
import MyPageStack from './src/components/MyPageStack';
import { UserContextProvider } from './src/contexts/UserContext';
import {LogContextProvider} from './src/contexts/LogContext';
import { SearchContextProvider } from './src/contexts/SearchContext';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'MyPageTab') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Icon name={iconName} size={30} color="peachpuff" />;
        },
        tabBarStyle: {},
      })}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: 'Home',
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="MyPageTab"
        component={MyPageStack}
        options={{
          title: 'MyPage',
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <SearchContextProvider>
          <LogContextProvider>
            <BottomTabNavigator />
          </LogContextProvider>
        </SearchContextProvider>
      </NavigationContainer>
    </UserContextProvider>
  );
}
