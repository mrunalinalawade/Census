import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Form1 from '../Screens/LingayatSamajSankalan/Form1';

const Stack = createNativeStackNavigator();
const RouteNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Form1">
      {/* -----------------------Splash----------------------------- */}
      <Stack.Screen name="Form1" component={Form1} />
    </Stack.Navigator>
  );
};

export default RouteNavigation;
