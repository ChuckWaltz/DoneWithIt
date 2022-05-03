import {
  StyleSheet,
  Modal,
  FlatList,
  TouchableHighlight,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

import AppText from "./AppText";
import AppButton from "./AppButton";
import theme from "../config/theme";

type Props = {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  [x: string]: any;
};

const AppPicker = ({ icon, items, placeholder }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableHighlight
        onPress={() => setModalVisible(true)}
        underlayColor={theme.colors.lightish}
        style={styles.container}
      >
        <>
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
        </>
      </TouchableHighlight>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.listContainer}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableHighlight
                underlayColor={theme.colors.lightish}
                onPress={() => console.log(item)}
                style={styles.pickerItem}
              >
                <AppText>{item.label}</AppText>
              </TouchableHighlight>
            )}
          ></FlatList>
        </View>
        <AppButton
          onPress={() => setModalVisible(false)}
          style={styles.closeButton}
        >
          Close
        </AppButton>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  closeButton: {
    backgroundColor: theme.colors.primary,
  },
  container: {
    backgroundColor: theme.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  listContainer: {
    paddingVertical: 20,
  },
  pickerItem: {
    padding: 10,
  },
  text: {
    flex: 1,
    height: 50,
    textAlignVertical: "center",
    ...theme.text.body,
  },
});

export default AppPicker;
