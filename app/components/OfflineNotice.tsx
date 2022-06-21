import { useNetInfo } from '@react-native-community/netinfo';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../config/theme';
import AppText from './AppText';

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  const notConnected =
    netInfo.type !== 'unknown' && netInfo.isInternetReachable === false;

  if (notConnected)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    height: 40,
    justifyContent: 'center',
    position: 'absolute',
    top: Constants.statusBarHeight,
    width: '100%',
  },
  text: {
    color: theme.colors.white,
  },
});

export default OfflineNotice;
