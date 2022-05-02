import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import theme from "../config/theme";
import AppText from "./AppText";

export default function AppCard({
  title,
  subTitle,
  image,
}: {
  title: string;
  subTitle: string;
  image: ImageSourcePropType;
}) {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={image} style={styles.image} />
      <View style={styles.details}>
        <AppText type="subheader">{title}</AppText>
        <AppText
          type="body"
          style={{ color: theme.secondary, fontWeight: "bold", marginTop: 5 }}
        >
          {subTitle}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 20,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 1,
    elevation: 2,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
