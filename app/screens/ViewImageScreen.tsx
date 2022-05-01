import { Image, StyleSheet, View } from "react-native";

import theme from "../config/theme";

export default function ViewImageScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.black,
    flex: 1,
  },
  closeIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 40,
    backgroundColor: theme.secondary,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    right: 40,
    backgroundColor: theme.primary,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
