import { StyleSheet, View } from "react-native";

import AppCard from "./app/components/AppCard";

export default function App() {
  return (
    <View style={styles.main}>
      <AppCard
        title="test"
        subTitle="test 2"
        image={require("./app/assets/jacket.jpg")}
      ></AppCard>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
