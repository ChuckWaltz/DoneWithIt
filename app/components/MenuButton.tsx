import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';
import theme from '../config/theme';

type Props = {
  children: React.ReactNode;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  color: string;
  backgroundColor: string;
  style?: any;
  onPress?: () => void;
};

const MenuButton = ({
  children,
  icon,
  color,
  backgroundColor,
  style,
  onPress,
}: Props) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={'none'}>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: theme.colors.white,
  },
  icon: {
    backgroundColor: 'dodgerblue',
    padding: 10,
    borderRadius: 50,
  },
  title: {
    marginLeft: 10,
  },
});

export default MenuButton;
