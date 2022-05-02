import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import theme from '../config/theme';

export default function AppButton({
  children,
  onPress,
  color = 'primary',
  style,
}: {
  children: React.ReactNode;
  onPress: () => void;
  color?: 'primary' | 'secondary';
  style?: any;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={createStyles(color, style).button}
    >
      <Text style={createStyles(color, style).text}>{children}</Text>
    </TouchableOpacity>
  );
}

const createStyles = (color: string, style: any) =>
  StyleSheet.create({
    button: {
      backgroundColor:
        color === 'primary'
          ? theme.colors.primary
          : color === 'secondary'
          ? theme.colors.secondary
          : theme.colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 100,
      width: '100%',
      alignItems: 'center',
      ...style,
    },
    text: {
      color: 'white',
      textTransform: 'uppercase',
      fontSize: 16,
    },
  });
