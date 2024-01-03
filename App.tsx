import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import HomePage from "./src/home";

export default function App() {
  return (
    <View className="w-screen pt-16 px-4 bg-primary-light">
      <HomePage />
      <StatusBar style="auto" />
    </View>
  );
}