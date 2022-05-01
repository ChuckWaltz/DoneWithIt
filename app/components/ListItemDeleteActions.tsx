import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDeleteActions = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
      <MaterialCommunityIcons name="trash-can" size={35} color="white" />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "tomato",
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ListItemDeleteActions;
