import { DefaultTheme, Theme } from "@react-navigation/native";
import theme from "../config/theme";

const navigationTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.background,
  },
};

export default navigationTheme;
