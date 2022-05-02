import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
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
    <ScrollView style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(message) => message.id.toString()}
        renderItem={(listingInfo) => {
          const listing = listingInfo.item;
          return (
            <AppCard
              title={listing.title}
              subTitle={listing.subTitle}
              image={listing.image}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 30 }}></View>}
        refreshing={refreshing}
      ></FlatList>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ListingsScreen;
