import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../screens/Home';
import SignIn from '../screens/User/SignIn'
import WelcomeScreen from '../screens/User/WelcomeScreen';

import AdBulletinBoard from '../screens/Ad/AdBulletinBoard';
import AdPostWriting from '../screens/Ad/AdPostWriting';
import AdPostSearchScreen from '../screens/Ad/AdPostSearchScreen';
import SearchHeader from './Ad/SearchHeader';

import DepartmentSelection from '../screens/DepartmentSelection';
import CPU from '../screens/Club/CPU';
import ClubInfo from '../screens/Club/ClubInfo';
import UploadScreen from '../screens/Club/UploadScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="AdBulletinBoard" component={AdBulletinBoard} options={{headerShown: false}}/>
      <Stack.Screen name="AdPostWriting" component={AdPostWriting} options={{headerShown: false}}/>
      <Stack.Screen name="AdPostSearchScreen" component={AdPostSearchScreen} options={{
          title: '검색',
          headerTitle: () => <SearchHeader />,
      }} />
      <Stack.Screen
        name="DepartmentSelection"
        component={DepartmentSelection}
        options={{headerShown: false}}/>
      <Stack.Screen name="CPU" component={CPU} options={{headerShown: false}}/>
      <Stack.Screen name="ClubInfo" component={ClubInfo} options={{headerShown: false}}/>
      <Stack.Screen
            name="Upload"
            component={UploadScreen}
            options={{title: '새 게시물', headerBackTitle: '뒤로가기'}}
          />
    </Stack.Navigator>
  );
}
