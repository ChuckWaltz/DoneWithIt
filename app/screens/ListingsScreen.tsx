import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import RootStackParamList from "../navigation/RootStackParamList";
import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import AppText from "../components/AppText";
import listingsApi from "../api/listings";
import Listing from "../api/models/listing";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Listings">;
};

const ListingsScreen = ({ navigation }: Props) => {
  const getListings = useApi(listingsApi.getListings);

  useEffect(() => {
    getListings.request();
  }, []);

  return (
    <>
      {getListings.error && (
        <>
          <AppText>Something went wrong.</AppText>
          <AppButton onPress={getListings.request}>Retry</AppButton>
        </>
      )}
      {/* <ActivityIndicator visible={loading} /> */}
      <FlatList
        data={getListings.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }: { item: Listing }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ListingDetails", { listing: item })
              }
              activeOpacity={1}
            >
              <AppCard
                title={item.title}
                subTitle={item.description}
                image={{ uri: item.images[0]?.url }}
              />
            </TouchableOpacity>
          );
        }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
        refreshing={getListings.refreshing}
        contentContainerStyle={styles.container}
      ></FlatList>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ListingsScreen;
