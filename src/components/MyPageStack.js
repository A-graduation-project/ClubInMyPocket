import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyPage from '../screens/MyPage';

const Stack = createNativeStackNavigator();

export default function MyPageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPage" component={MyPage} />
    </Stack.Navigator>
  );
}
