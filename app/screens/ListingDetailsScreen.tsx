import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
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
        <View style={styles.sellerInfo}>
          <Image
            source={require("../assets/mosh.jpg")}
            style={styles.sellerImage}
          />
          <View style={styles.sellerInfoText}>
            <AppText type="body">Seller Name</AppText>
            <AppText>5 Listings</AppText>
          </View>
        </View>
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
  sellerInfo: { flexDirection: "row", marginTop: 20 },
  sellerInfoText: {
    flex: 1,
    marginLeft: 10,
  },
  sellerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
