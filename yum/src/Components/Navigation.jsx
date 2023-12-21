import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen'; 
import IngredientsList from '../screens/IngredientsList';
const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false, // This turns off the header for all screens in the navigator
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="IngredientsList" component = {IngredientsList}/>
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
