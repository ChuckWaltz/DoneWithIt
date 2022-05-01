import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

import theme from "../config/theme";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.logoText}>This is an awesome app!</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 20,
  },
  loginButton: {
    backgroundColor: theme.primaryColor,
    width: "100%",
    height: 70,
  },
  registerButton: {
    backgroundColor: theme.secondaryColor,
    width: "100%",
    height: 70,
  },
});
