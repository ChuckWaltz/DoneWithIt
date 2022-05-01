import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../config/theme";

export default function AppButton({
  children,
  color,
  style,
}: {
  children: any;
  color: "primary" | "secondary";
  style?: any;
}) {
  return (
    <Pressable
      onPress={() => console.log("Pressed")}
      style={createStyles(color, style).button}
    >
      <Text style={createStyles(color, style).text}>{children}</Text>
    </Pressable>
  );
}

const createStyles = (color: string, style: any) =>
  StyleSheet.create({
    button: {
      backgroundColor:
        color === "primary"
          ? theme.primary
          : color === "secondary"
          ? theme.secondary
          : theme.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 100,
      width: "100%",
      alignItems: "center",
      ...style,
    },
    text: {
      color: "white",
      textTransform: "uppercase",
      fontSize: 16,
    },
  });
