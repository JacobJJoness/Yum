import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login'
const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerShown: false, // This turns off the header for all screens in the navigator
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    
    </Stack.Navigator>
  );
}
export default Navigation;
