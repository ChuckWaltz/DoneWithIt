import { StyleSheet, View } from 'react-native';
import theme from '../config/theme';

const ListItemSeparator = () => {
  return <View style={styles.separator}></View>;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.medium,
  },
});

export default ListItemSeparator;
