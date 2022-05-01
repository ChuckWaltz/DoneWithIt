import { StyleSheet, Text, Platform, StyleProp, TextStyle } from "react-native";

import theme from "../config/theme";

type TextType = "header" | "subheader" | "body";

type AppTextInput = {
  children: any;
  type: TextType;
  style?: StyleProp<TextStyle>;
};

export default function AppText({ children, type, style }: AppTextInput) {
  return <Text style={createStyles(type, style).text}>{children}</Text>;
}

const platformStyles = (type: TextType) =>
  Platform.select({
    ios: {
      fontSize: getFontSize("ios", type),
      fontFamily: "Avenir",
    },
    android: { fontSize: getFontSize("android", type), fontFamily: "Roboto" },
  });

const getFontSize = (platform: "ios" | "android", type: TextType): number => {
  switch (platform) {
    case "ios":
      switch (type) {
        case "header":
          return 28;
        case "subheader":
          return 22;
        case "body":
          return 16;
        default:
          return 12;
      }
    case "android":
      switch (type) {
        case "header":
          return 26;
        case "subheader":
          return 20;
        case "body":
          return 18;
        default:
          return 12;
      }
  }
};

const createStyles = (type: TextType, inputStyles: any) =>
  StyleSheet.create({
    text: {
      color: theme.black,
      fontWeight: type === "header" || "subheader" ? "700" : "500",
      textTransform: type === "header" || "subheader" ? "capitalize" : "none",
      ...platformStyles(type),
      ...inputStyles,
    },
  });
