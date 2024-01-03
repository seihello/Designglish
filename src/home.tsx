import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Text from "./components/ui/text";

export default function HomePage() {
  return (
    <View className="h-1/2 w-full">
      <View className="flex flex-row items-center justify-between px-8 py-2">
        <View className="mt-24 flex w-1/2 flex-col">
          <Text className="text-[32px]" type="bold">
            Hi, Lisa!
          </Text>
          <Text className="text-lg">What do you want to learn today?</Text>
        </View>
        <View className="flex flex-col">
          <View className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
            <Icon name="account" color="#239CAC" size={42} />
          </View>
          <Text className="font-roboto-bold text-primary-main">My page</Text>
        </View>
      </View>
    </View>
  );
}
