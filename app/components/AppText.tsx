import { StyleSheet, Text, Platform } from "react-native";

import theme from "../config/theme";

export default function AppText({
  children,
  style,
}: {
  children: any;
  style?: any;
}) {
  return <Text style={createStyles(style).text}>{children}</Text>;
}

const platformStyles = Platform.select({
  ios: {
    fontSize: 18,
    fontFamily: "Avenir",
  },
  android: { fontSize: 20, fontFamily: "Roboto" },
});

const createStyles = (inputStyles: any) =>
  StyleSheet.create({
    text: {
      color: theme.black,
      ...platformStyles,
      ...inputStyles,
    },
  });
