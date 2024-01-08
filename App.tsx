import { useFonts } from "expo-font";
// import { StatusBar } from "expo-status-bar";
// import { View } from "react-native";
import WordPage from "./src/word";
import HomePage from "./src/home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
    Caveat: require("./assets/fonts/Caveat-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="word">
        <Stack.Screen name="home" component={HomePage} />
        <Stack.Screen name="word" component={WordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
