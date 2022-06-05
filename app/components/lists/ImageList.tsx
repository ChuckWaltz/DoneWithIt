import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import AppImageInput from "../AppImageInput";
import { ImageType } from "../types/image-item.model";

function ImageList() {
  const [images, setImages] = useState<ImageType[]>([]);

  return (
    <FlatList
      style={styles.list}
      horizontal
      data={images.reverse()}
      keyExtractor={(image: ImageType) => image.id}
      renderItem={({ item }) => (
        <AppImageInput
          id={item.id}
          uri={item.uri}
          onRemoveImage={(image: ImageType) => {
            setImages(images.filter((i: ImageType) => i.id !== image.id));
          }}
          style={styles.listItem}
        />
      )}
      ListHeaderComponent={
        <AppImageInput
          onSelectImage={(image: ImageType) => {
            setImages([...images, image]);
          }}
          style={styles.listItem}
        />
      }
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    paddingHorizontal: 5,
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
});

export default ImageList;
