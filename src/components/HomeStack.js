import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import AdBulletinBoard from '../screens/Ad/AdBulletinBoard';
import AdPostWriting from '../screens/Ad/AdPostWriting';
import AdPostSearchScreen from '../screens/Ad/AdPostSearchScreen';
import DepartmentSelection from '../screens/DepartmentSelection';
import CPU from '../screens/Club/CPU';
import ClubInfo from '../screens/Club/ClubInfo';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="AdBulletinBoard" component={AdBulletinBoard} />
      <Stack.Screen name="AdPostWriting" component={AdPostWriting} />
      <Stack.Screen name="AdPostSearchScreen" component={AdPostSearchScreen} />
      <Stack.Screen
        name="DepartmentSelection"
        component={DepartmentSelection}
      />
      <Stack.Screen name="CPU" component={CPU} />
      <Stack.Screen name="ClubInfo" component={ClubInfo} />
    </Stack.Navigator>
  );
}
