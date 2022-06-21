import { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigator';
import MainNavigator from './app/navigation/MainNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AuthContext from './app/auth/auth';
import OfflineNotice from './app/components/OfflineNotice';
import authStorage from './app/auth/storage';

export default function App() {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user as any);
  };

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        await restoreUser();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <AuthContext.Provider value={{ user, setUser }}>
        <Screen>
          <NavigationContainer theme={navigationTheme}>
            {!user ? <AuthNavigator /> : <MainNavigator />}
            <OfflineNotice />
          </NavigationContainer>
        </Screen>
      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({});
