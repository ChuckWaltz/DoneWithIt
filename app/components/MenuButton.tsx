import { TouchableHighlight } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import AppText from "./AppText";
import { StyleSheet, View } from "react-native";
import theme from "../config/theme";

const MenuButton = ({
  children,
  icon,
  color,
  backgroundColor,
  style,
}: {
  children: React.ReactNode;
  icon: any;
  color: string;
  backgroundColor: string;
  style?: any;
}) => {
  return (
    <TouchableHighlight>
      <View style={[styles.wrapper, style]}>
        <MaterialCommunityIcons
          name={icon}
          size={26}
          color={color}
          style={[styles.icon, { backgroundColor }]}
        />
        <AppText type="subheader" style={styles.title}>
          {children}
        </AppText>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: theme.white,
  },
  icon: {
    backgroundColor: "dodgerblue",
    padding: 10,
    borderRadius: 50,
  },
  title: {
    marginLeft: 10,
  },
});

export default MenuButton;
