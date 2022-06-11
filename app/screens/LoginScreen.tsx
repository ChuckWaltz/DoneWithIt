import { Image, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Yup from "yup";

import RootStackParamList from "../navigation/RootStackParamList";
import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import AppForm from "../components/forms/AppForm";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
};

const LoginScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        ></AppFormField>
        <AppFormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="key"
          keyboardType="visible-password"
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
        ></AppFormField>
        <AppSubmitButton style={{ marginTop: 10 }}>Login</AppSubmitButton>
      </AppForm>
      <AppButton
        color="secondary"
        onPress={() => navigation.navigate("Register")}
        style={{ marginTop: 20 }}
      >
        Go To Register Page
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default LoginScreen;
