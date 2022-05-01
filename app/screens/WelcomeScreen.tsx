import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

import theme from "../config/theme";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppText style={styles.logoText}>Super Duper App</AppText>
      </View>

      <AppButton color="primary">Login</AppButton>
      <AppButton color="secondary" style={{ marginTop: 20 }}>
        Register
      </AppButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    padding: 20,
  },
  logoContainer: {
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: "20%",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "700",
  },
  loginButton: {
    backgroundColor: theme.primary,
    width: "100%",
    height: 70,
  },
  registerButton: {
    backgroundColor: theme.secondary,
    width: "100%",
    height: 70,
  },
});
