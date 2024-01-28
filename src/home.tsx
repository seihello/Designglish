import React from "react";
import { Image, View } from "react-native";
import HomeMainPanel from "./components/home/main-panel";
import Text from "./components/ui/text";

export default function HomePage(props: any) {
  return (
    <View className="flex h-screen w-full flex-col bg-primary-main">
      <View className="relative flex h-48 flex-col justify-center">
        <Image
          source={require("../assets/mv.png")}
          className="absolute -bottom-4 right-8"
        />
        {/* <View className="flex flex-row justify-end p-4">
          <View className="flex flex-col">
            <View className="flex items-center justify-center rounded-full bg-white p-1">
              <Icon name="account" color="#239CAC" size={32} />
            </View>
          </View>
        </View> */}
        <View className="px-8">
          <View className="flex w-1/2 flex-col">
            <View className="flex h-12 flex-col justify-center">
              <Text className="font-dm-bold text-[32px] text-white">
                {/* Welcome, Lisa! */}
                Hi!
              </Text>
            </View>
            <Text className="font-dm-bold text-lg text-white">
              What do you want to learn today?
            </Text>
          </View>
        </View>
      </View>
      <HomeMainPanel navigation={props.navigation} />
    </View>
  );
}
