import { StyleSheet, View } from "react-native";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const listItems = [
  {
    id: 1,
    label: "Furniture",
  },
  {
    id: 2,
    label: "Clothing",
  },
  {
    id: 3,
    label: "Electronics",
  },
];

export default function App() {
  return (
    <Screen>
      <View style={styles.main}>
        <AppPicker items={listItems} icon="apps" placeholder="Category" />
        <AppTextInput icon="email" placeholder="Email" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
  },
});
