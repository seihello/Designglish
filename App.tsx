import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useFonts } from "expo-font";
import HomePage from "./src/home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    Caveat: require("./assets/fonts/Caveat-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View className="w-screen pt-16 px-4 bg-primary-light" style={{}}>
      <HomePage />
      <StatusBar style="auto" />
    </View>
  );
}
