import { StyleSheet } from 'react-native';
import ListingEditScreen from './app/screens/ListingEditScreen';

import Screen from './app/components/Screen';

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({});
