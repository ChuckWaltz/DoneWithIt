import { Platform, StatusBar, StyleSheet, View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <View style={styles.main}>
      {/* <AppCard
        title="This is a title!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      ></AppCard> */}
      <ViewImageScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
