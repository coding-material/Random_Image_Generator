import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import Screen from './app/config/Screen';
import Home from './app/screens/Home';

export default function App() {
  return (
    <View>
      <Screen>
        <StatusBar style='auto' />
        <Home />
      </Screen>
    </View>
  );
}
