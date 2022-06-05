import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AppCard from "../components/AppCard";

const listings = [
  {
    id: 1,
    title: "Test 1",
    subTitle: "Test 1 Subtitle",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Test 2",
    subTitle: "Test 2 Subtitle",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 3,
    title: "Test 3",
    subTitle: "Test 3 Subtitle",
    image: require("../assets/jacket.jpg"),
  },
];

const ListingsScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  return (
    <FlatList
      data={listings}
      keyExtractor={(listing) => listing.id.toString()}
      renderItem={({ item }) => {
        return (
          <AppCard
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
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
