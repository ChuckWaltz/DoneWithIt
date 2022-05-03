import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

type Props = { children: React.ReactNode };

const Screen = ({ children }: Props) => {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

export default Screen;
