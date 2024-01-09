import React from "react";
import { Image, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Text from "./components/ui/text";
import HomeMainPanel from "./components/home/main-panel";

export default function HomePage(props: any) {
  return (
    <View className="flex h-screen w-full flex-col bg-primary-main">
      <View className="flex flex-row justify-end p-4">
        <View className="flex flex-col">
          <View className="flex items-center justify-center rounded-full bg-white p-1">
            <Icon name="account" color="#239CAC" size={32} />
          </View>
        </View>
      </View>
      <View className="relative px-8">
        <Image
          source={require("../assets/mv.png")}
          className="absolute right-8 -bottom-4"
        />
        <View className="flex w-1/2 flex-col">
          <Text className="font-dm-bold text-[32px] text-white">
            Welcome, Lisa!
          </Text>
          <Text className="font-dm-bold text-lg text-white">
            What do you want to learn today?
          </Text>
        </View>
      </View>
      <HomeMainPanel navigation={props.navigation} />
    </View>
  );
}
