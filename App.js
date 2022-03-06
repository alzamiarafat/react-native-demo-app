import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Main';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/auth/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Main} />
        {/* <Main /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

