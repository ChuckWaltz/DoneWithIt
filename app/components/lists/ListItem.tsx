import {
  Image,
  ImageURISource,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import theme from "../../config/theme";

type Props = {
  title: string;
  description: string;
  image: ImageURISource;
  onPress: () => void;
  renderRightActions: () => React.ReactNode;
  showChevron?: boolean;
};

const ListItem = ({
  title,
  description,
  image,
  onPress,
  renderRightActions,
  showChevron = false,
}: Props) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight
          underlayColor={theme.colors.light}
          onPress={onPress}
        >
          <View style={styles.container}>
            <Image source={image} style={styles.sellerImage} />
            <View style={styles.textWrapper}>
              <AppText type="body" numberOfLines={1}>
                {title}
              </AppText>
              <AppText style={{ color: theme.colors.medium }} numberOfLines={2}>
                {description}
              </AppText>
            </View>
            {showChevron && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={theme.colors.medium}
              />
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  textWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  sellerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default ListItem;
