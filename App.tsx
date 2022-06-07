import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingEditScreen from "./app/screens/ListingEditScreen";
import LoginScreen from "./app/screens/LoginScreen";

import Screen from "./app/components/Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
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
    <Tab.Navigator>
      <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default function App() {
  return (
    <Screen>
      <TabNavigator />
    </Screen>
  );
}

const styles = StyleSheet.create({});
