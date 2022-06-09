import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListingEditScreen from './app/screens/ListingEditScreen';
import LoginScreen from './app/screens/LoginScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import Screen from './app/components/Screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RegisterScreen from './app/screens/RegisterScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
  ListingEdit: undefined;
};

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ListingEdit" component={ListingEditScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

const AuthNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default function App() {
  return (
    <Screen>
      <AuthNavigator />
    </Screen>
  );
}

const styles = StyleSheet.create({});
