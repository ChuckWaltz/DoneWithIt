import { useState } from "react";
import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  ViewStyle,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../config/theme";

type Props = {
  style?: StyleProp<ViewStyle>;
  [x: string]: any;
};

export default function AppImageInput({ style, ...otherProps }: Props) {
  let libraryPermission: ImagePicker.PermissionStatus;

  const [imageUri, setImageUri] = useState<string>();

  const requestLibraryPermission = async () => {
    const currentPermission =
      await ImagePicker.getMediaLibraryPermissionsAsync();
    libraryPermission = currentPermission.status;

    if (libraryPermission !== ImagePicker.PermissionStatus.GRANTED) {
      const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
      libraryPermission = result.status;
    }
  };

  const selectImage = async () => {
    await requestLibraryPermission();

    if (libraryPermission === ImagePicker.PermissionStatus.GRANTED) {
      try {
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
          setImageUri(result.uri);
        }
      } catch (error) {}
    }
  };

  return (
    <TouchableHighlight
      onPress={selectImage}
      style={[styles.button, style]}
      underlayColor={theme.colors.secondary}
    >
      <>
        {!imageUri ? (
          <MaterialCommunityIcons
            color={theme.colors.medium}
            name="camera"
            style={styles.icon}
          />
        ) : (
          <Image
            source={{ uri: imageUri }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 15,
    width: 100,
    height: 100,
    backgroundColor: theme.colors.lightish,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    fontSize: 42,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
