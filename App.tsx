import { StyleSheet, View } from "react-native";
import OfflineNotice from "./app/components/OfflineNotice";

import Screen from "./app/components/Screen";

import MainNavigator from "./app/navigation/MainNavigator";

export default function App() {
  return (
    <Screen>
      <OfflineNotice />
      <MainNavigator />
    </Screen>
  );
}

const styles = StyleSheet.create({});
