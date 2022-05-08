import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import theme from "../config/theme";

type Props = {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
  width?: number | string;
  [x: string]: any;
};

const AppTextInput = ({ icon, width, ...otherProps }: Props) => {
  return (
    <View style={[styles.container, { width: width ?? "100%" }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={theme.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    ...theme.text.body,
  },
});

export default AppTextInput;
