import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import RootStackParamList from "../navigation/RootStackParamList";
import AppCard from "../components/AppCard";

const listings = [
  {
    id: 1,
    title: "Test 1",
    description: "Test 1 Subtitle",
    image: require("../assets/jacket.jpg"),
    price: 150.0,
    categoryId: 1,
  },
  {
    id: 2,
    title: "Test 2",
    description: "Test 2 Subtitle",
    image: require("../assets/jacket.jpg"),
    price: 12.0,
    categoryId: 2,
  },
  {
    id: 3,
    title: "Test 3",
    description: "Test 3 Subtitle",
    image: require("../assets/jacket.jpg"),
    price: 20.0,
    categoryId: 3,
  },
];

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Listings">;
};

const ListingsScreen = ({ navigation }: Props) => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <FlatList
      data={listings}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => {
        return (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("ListingDetails", { listing: item })
            }
          >
            <AppCard
              title={item.title}
              subTitle={item.description}
              image={item.image}
            />
          </TouchableWithoutFeedback>
        );
      }}
      ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
      refreshing={refreshing}
      contentContainerStyle={styles.container}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ListingsScreen;
