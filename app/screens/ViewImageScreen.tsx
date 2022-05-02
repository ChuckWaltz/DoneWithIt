import {
  Image,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../config/theme';

export default function ViewImageScreen() {
  return (
    <View style={styles.background}>
      <Pressable
        onPress={() => console.log('close')}
        style={styles.closeButton}
      >
        <MaterialCommunityIcons
          name="close"
          size={theme.iconButtonSize}
          color="white"
        />
      </Pressable>
      <Pressable
        onPress={() => console.log('delete')}
        style={styles.deleteButton}
      >
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={theme.iconButtonSize}
          color="tomato"
        />
      </Pressable>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../assets/chair.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: theme.colors.black,
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  closeButton: {
    position: 'absolute',
    zIndex: 1,
    top: 40,
    left: 20,
  },
  deleteButton: {
    position: 'absolute',
    zIndex: 1,
    top: 40,
    right: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
