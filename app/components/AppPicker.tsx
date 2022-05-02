import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../config/theme';
import AppText from './AppText';
import { useState } from 'react';
import Screen from './Screen';

type Props = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  [x: string]: any;
};

const AppPicker = ({ icon, placeholder, ...otherProps }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={theme.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={theme.colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)}></Button>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    height: 50,
    textAlignVertical: 'center',
    ...theme.text.body,
  },
});

export default AppPicker;
