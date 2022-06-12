import { StyleSheet, View, Image, ImageBackground } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import theme from "../config/theme";
import RootStackParamList from "../navigation/RootStackParamList";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Welcome">;
};

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <AppText type="header">Super Duper App</AppText>
      </View>

      <AppButton color="primary" onPress={() => navigation.navigate("Login")}>
        Login
      </AppButton>
      <AppButton
        color="secondary"
        onPress={() => navigation.navigate("Register")}
        style={{ marginTop: 20 }}
      >
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
  loginButton: {
    backgroundColor: theme.colors.primary,
    width: "100%",
    height: 70,
  },
  registerButton: {
    backgroundColor: theme.colors.secondary,
    width: "100%",
    height: 70,
  },
});
