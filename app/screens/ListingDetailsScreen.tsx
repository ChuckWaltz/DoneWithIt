import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import theme from "../config/theme";

export default function ListDetailsScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText type="header">Title</AppText>
        <AppText
          type="subheader"
          style={{ color: theme.secondary, marginTop: 10 }}
        >
          $100
        </AppText>
        {/* <ListItem
          title="Test Title"
          description="This is a description"
          image={require("../assets/mosh.jpg")}
          onPress={() => console.log("Pressed")}
        ></ListItem> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    paddingTop: 15,
    paddingHorizontal: 20,
  },
});
