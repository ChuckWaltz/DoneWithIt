import { StyleSheet } from "react-native";
import ImageList from "./app/components/lists/ImageList";

import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <ImageList />
    </Screen>
  );
}

const styles = StyleSheet.create({});
