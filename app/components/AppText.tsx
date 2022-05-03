import { Text, StyleProp, TextStyle } from "react-native";
import theme, { TextType } from "../config/theme";

type Props = {
  children: any;
  type?: TextType;
  style?: StyleProp<TextStyle>;
};

export default function AppText({
  children,
  type = "body",
  style = undefined,
}: Props) {
  return <Text style={[theme.text[type], style]}>{children}</Text>;
}
