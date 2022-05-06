import { Text, StyleProp, TextStyle } from 'react-native';
import theme, { TextType } from '../config/theme';

type Props = {
  children: any;
  type?: TextType;
  style?: StyleProp<TextStyle>;
  [x: string]: any;
};

export default function AppText({
  children,
  type = 'body',
  style,
  ...otherProps
}: Props) {
  return (
    <Text style={[theme.text[type], style]} {...otherProps}>
      {children}
    </Text>
  );
}
