import { StyleSheet, Text, TouchableHighlight } from "react-native";
import theme from "../config/theme";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  color?: "primary" | "secondary";
  style?: any;
};

export default function AppButton({
  children,
  onPress,
  color = "primary",
  style,
}: Props) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[createStyles(color).button, style]}
      underlayColor={
        color === "primary"
          ? theme.colors.secondary
          : color === "secondary"
          ? theme.colors.primary
          : theme.colors.medium
      }
    >
      <Text style={createStyles(color).text}>{children}</Text>
    </TouchableHighlight>
  );
}

const createStyles = (color: string) =>
  StyleSheet.create({
    button: {
      backgroundColor:
        color === "primary"
          ? theme.colors.primary
          : color === "secondary"
          ? theme.colors.secondary
          : theme.colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 100,
      width: "100%",
      alignItems: "center",
    },
    text: {
      color: "white",
      textTransform: "uppercase",
      fontSize: 16,
    },
  });
