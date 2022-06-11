import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Image, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../../App";
import AppText from "../components/AppText";
import theme from "../config/theme";

type Props = NativeStackScreenProps<RootStackParamList, "ListingDetails">;

export default function ListDetailsScreen({ route }: Props) {
  const { title, price } = route.params.listing;

  return (
    <View style={styles.container}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText type="header">{title}</AppText>
        <AppText
          type="subheader"
          style={{ color: theme.colors.secondary, marginTop: 10 }}
        >
          {price}
        </AppText>
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
