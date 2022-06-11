import { StyleSheet } from "react-native";

import Screen from "./app/components/Screen";

import MainNavigator from "./app/navigation/MainNavigator";

export default function App() {
  return (
    <Screen>
      <MainNavigator />
    </Screen>
  );
}

const styles = StyleSheet.create({});
