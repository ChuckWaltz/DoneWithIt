import { StyleSheet, View } from "react-native";

import AppCard from "./app/components/AppCard";

export default function App() {
  return (
    <View style={styles.main}>
      <AppCard
        title="This is a title!"
        subTitle="$100"
        image={require("./app/assets/jacket.jpg")}
      ></AppCard>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: "#f8f4f4",
  },
});
