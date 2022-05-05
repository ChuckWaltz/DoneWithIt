import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import theme from '../config/theme';

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  color?: 'primary' | 'secondary';
  style?: any;
  [x: string]: any;
};

export default function AppButton({
  children,
  onPress,
  color = 'primary',
  style,
  ...otherProps
}: Props) {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[createStyles(color, otherProps).button, style]}
      underlayColor={
        color === 'primary'
          ? theme.colors.secondary
          : color === 'secondary'
          ? theme.colors.primary
          : theme.colors.medium
      }
      {...otherProps}
    >
      <Text style={createStyles(color).text}>{children}</Text>
    </TouchableHighlight>
  );
}

const createStyles = (color: string, otherProps?: any) =>
  StyleSheet.create({
    button: {
      backgroundColor:
        color === 'primary'
          ? theme.colors.primary
          : color === 'secondary'
          ? theme.colors.secondary
          : theme.colors.primary,
      opacity: otherProps?.disabled ? 0.5 : 1,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 100,
      width: '100%',
      alignItems: 'center',
    },
    disabled: {
      opacity: 0.5,
    },
    text: {
      color: 'white',
      textTransform: 'uppercase',
      fontSize: 16,
    },
  });
