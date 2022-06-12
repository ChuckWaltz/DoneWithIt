import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../config/theme";

const AppNewListingButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={theme.colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 16,
    borderWidth: 5,
    borderColor: theme.colors.white,
    borderRadius: 40,
    width: 80,
    height: 80,
    backgroundColor: theme.colors.primary,
  },
});

export default AppNewListingButton;
