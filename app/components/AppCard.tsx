import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
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
      <AppText type="header">{title}</AppText>
      <AppText type="body">{subTitle}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 20,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
