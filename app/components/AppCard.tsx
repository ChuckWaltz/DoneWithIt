import { ImageURISource } from 'react-native';
import { Image, StyleSheet, View } from 'react-native';
import theme from '../config/theme';
import AppText from './AppText';

type Props = {
  title: string;
  price: number;
  subTitle: string;
  image: ImageURISource;
};

export default function AppCard({ title, price, subTitle, image }: Props) {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={image} style={styles.image} />
      <View style={styles.details}>
        <AppText type="subheader">{title}</AppText>
        <AppText style={{ color: theme.colors.secondary, marginTop: 5 }}>
          ${price}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 20,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
