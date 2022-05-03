import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import theme from "../config/theme";

type Props = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  onPress: () => void;
  renderRightActions: () => React.ReactNode;
};

const ListItem = ({
  title,
  description,
  image,
  onPress,
  renderRightActions,
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
              <AppText type="body">{title}</AppText>
              <AppText style={{ color: theme.colors.medium }}>
                {description}
              </AppText>
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 10 },
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
