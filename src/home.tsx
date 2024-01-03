import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomePage() {
  return (
    <View className="w-full h-screen">
      <View className="flex flex-row justify-between items-center  px-8 py-2">
        <View className="flex flex-col w-1/2 mt-24">
          <Text className="text-[32px] font-bold">Hi, Lisa!</Text>
          <Text className="text-lg">What do you want to learn today?</Text>
        </View>
        <View className="w-16 h-16 bg-white flex justify-center items-center rounded-full">
          <Icon name="account" color="#239CAC" size={48} />
        </View>
      </View>
    </View>
  );
}
