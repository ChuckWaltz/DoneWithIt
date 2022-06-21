import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import MenuButton from '../components/MenuButton';
import theme from '../config/theme';
import RootStackParamList from '../navigation/RootStackParamList';
import useAuth from '../auth/useAuth';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Account'>;
};

const AccountScreen = ({ navigation }: Props) => {
  const { user, logOut } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.userCard}>
        <Image source={require('../assets/mosh.jpg')} style={styles.image} />
        <View style={styles.userInfo}>
          <AppText style={{ fontSize: 18 }}>{user.name}</AppText>
          <AppText style={{ color: theme.colors.medium }}>{user.email}</AppText>
        </View>
      </View>
      <MenuButton
        icon="format-list-bulleted"
        color={theme.colors.white}
        backgroundColor={theme.colors.primary}
        style={{ marginTop: 40, marginBottom: 1 }}
      >
        My Listings
      </MenuButton>
      <MenuButton
        icon="email"
        color={theme.colors.white}
        backgroundColor={theme.colors.secondary}
        onPress={() => navigation.navigate('Messages')}
      >
        My Messages
      </MenuButton>
      <MenuButton
        icon="logout"
        color={theme.colors.white}
        backgroundColor="#ffe66d"
        style={{ marginTop: 20 }}
        onPress={() => logOut()}
      >
        Log Out
      </MenuButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f4f4',
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  userInfo: {
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default AccountScreen;
