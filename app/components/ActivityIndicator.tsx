import LottieView from "lottie-react-native";
const animation = require("../assets/animations/loading.json");

const ActivityIndicator = ({ visible = true }) => {
  if (!visible) return null;

  return <LottieView autoPlay loop source={animation}></LottieView>;
};

export default ActivityIndicator;
