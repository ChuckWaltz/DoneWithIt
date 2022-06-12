import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import AppImageInput from "../AppImageInput";
import { ImageType } from "../types/image-item.model";

type Props = {
  images: ImageType[];
  onChangeImages?: (images: ImageType[]) => void;
};

const ImageInputList = ({ images, onChangeImages }: Props) => {
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
            const updatedImages = images.filter(
              (i: ImageType) => i.id !== image.id
            );
            onChangeImages?.(updatedImages);
          }}
          style={styles.listItem}
        />
      )}
      ListHeaderComponent={
        <AppImageInput
          onSelectImage={(image: ImageType) => {
            const updatedImages = [...images, image];
            onChangeImages?.(updatedImages);
          }}
        />
      }
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  list: {
    width: "100%",
    marginBottom: 10,
  },
  listItem: {
    marginLeft: 10,
  },
});

export default ImageInputList;
