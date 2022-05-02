import { StyleSheet, View } from 'react-native';

import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const listItems = [
  {
    id: 1,
    label: 'Item 1',
  },
  {
    id: 2,
    label: 'Item 2',
  },
  {
    id: 3,
    label: 'Item 3',
  },
];

export default function App() {
  return (
    <Screen>
      <AppPicker items={listItems} icon="apps" placeholder="Category" />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f8f4f4',
  },
});
