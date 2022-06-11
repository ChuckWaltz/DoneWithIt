import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../../App";
import AppText from "../components/AppText";
import MenuButton from "../components/MenuButton";
import theme from "../config/theme";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Account">;
};

const AccountScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Image source={require("../assets/mosh.jpg")} style={styles.image} />
        <View style={styles.userInfo}>
          <AppText style={{ fontSize: 18 }}>Mosh Hamendani</AppText>
          <AppText style={{ color: theme.colors.medium }}>
            mosh@gmail.com
          </AppText>
        </View>
      </View>
      <MenuButton
        icon="format-list-bulleted"
        color={theme.colors.white}
        backgroundColor={theme.colors.primary}
        style={{ marginTop: 40, marginBottom: 1 }}
      >
        My Listings
      </MenuButton>
      <MenuButton
        icon="email"
        color={theme.colors.white}
        backgroundColor={theme.colors.secondary}
        onPress={() => navigation.navigate("Messages")}
      >
        My Messages
      </MenuButton>
      <MenuButton
        icon="logout"
        color={theme.colors.white}
        backgroundColor="#ffe66d"
        style={{ marginTop: 20 }}
      >
        Log Out
      </MenuButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
  userCard: {
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  userInfo: {
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default AccountScreen;
