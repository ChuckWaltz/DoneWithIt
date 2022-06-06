import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AppImageInput from '../AppImageInput';
import { ImageType } from '../types/image-item.model';

type Props = {
  onChangeImages?: (images: ImageType[]) => void;
};

const ImageInputList = ({ onChangeImages }: Props) => {
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
            const updatedImages = images.filter(
              (i: ImageType) => i.id !== image.id
            );
            setImages(updatedImages);
            onChangeImages?.(updatedImages);
          }}
          style={styles.listItem}
        />
      )}
      ListHeaderComponent={
        <AppImageInput
          onSelectImage={(image: ImageType) => {
            const updatedImages = [...images, image];
            setImages(updatedImages);
            onChangeImages?.(updatedImages);
          }}
        />
      }
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  list: {
    width: '100%',
    marginBottom: 10,
  },
  listItem: {
    marginLeft: 10,
  },
});

export default ImageInputList;
