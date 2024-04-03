import React from "react";
import { Image, View } from "react-native";
import HomeMainPanel from "./components/home/main-panel";
import Text from "./components/ui/text";

export default function HomePage(props: any) {
  return (
    <View className="flex h-screen w-full flex-col justify-between bg-primary-900 pt-16">
      <View className="relative flex grow flex-col justify-center">
        <Image
          source={require("../assets/mv.png")}
          className="absolute right-8 top-1/2"
          style={{
            // -50% can't be accepted
            transform: [{ translateY: -179 / 2 }],
          }}
        />
        {/* <View className="flex flex-row justify-end p-4">
          <View className="flex flex-col">
            <View className="flex items-center justify-center rounded-full bg-white p-1">
              <Icon name="account" color="#239CAC" size={32} />
            </View>
          </View>
        </View> */}
        <View
          className="absolute left-12 top-1/2 w-[180px]"
          style={{
            // -50% can't be accepted
            transform: [{ translateY: -96 / 2 }],
          }}
        >
          <View className="flex h-12 flex-col justify-center">
            <Text className="font-dm-bold text-[32px] text-white">
              {/* Welcome, Lisa! */}
              Hi!
            </Text>
          </View>
          <Text className="font-dm-bold text-lg leading-[20.83px] text-white">
            What do you want to learn today?
          </Text>
        </View>
      </View>
      <HomeMainPanel navigation={props.navigation} />
    </View>
  );
}
