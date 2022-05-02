import { StyleSheet, View } from "react-native";

import Screen from "./app/components/Screen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return (
    <Screen>
      <View style={styles.main}>
        <ListingsScreen />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
