import {
  Image,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import uuid from "react-native-uuid";
import theme from "../config/theme";
import { ImageType } from "./types/image-item.model";

type Props = {
  id?: string;
  uri?: string;
  onSelectImage?: (image: ImageType) => void;
  onRemoveImage?: (image: ImageType) => void;
  style?: StyleProp<ViewStyle>;
  [x: string]: any;
};

export default function AppImageInput({
  id,
  uri,
  onSelectImage,
  onRemoveImage,
  style,
  ...otherProps
}: Props) {
  let libraryPermission: ImagePicker.PermissionStatus;

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
          onSelectImage?.({ id: uuid.v4().toString(), uri: result.uri });
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
        {!uri ? (
          <MaterialCommunityIcons
            color={theme.colors.medium}
            name="camera"
            style={styles.icon}
          />
        ) : (
          <>
            <Image
              source={{ uri: uri }}
              style={styles.image}
              resizeMode="cover"
            />
            {onRemoveImage && id && (
              <TouchableWithoutFeedback
                onPress={() => onRemoveImage!({ id: id!, uri: uri! })}
              >
                <MaterialCommunityIcons
                  color={theme.colors.red}
                  name="delete"
                  style={styles.removeIcon}
                />
              </TouchableWithoutFeedback>
            )}
          </>
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
  removeIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    fontSize: 26,
  },
});
