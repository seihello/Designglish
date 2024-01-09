import React from "react";
import { Image, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Text from "../ui/text";

export default function CourseCards({ navigation }: any) {
  return (
    <View className="mt-2">
      <TouchableHighlight
        onPress={() => navigation.push("Word")}
        underlayColor="white"
        className="w-full"
      >
        <View className="mt-2 flex w-full flex-row items-center overflow-hidden rounded-xl bg-primary-light">
          <Image source={require("../../../assets/course-logo-1.png")} />
          <View className="flex flex-1 flex-col  p-4">
            <Text className="font-dm-bold text-lg">Common words</Text>
            <View className="mt-2 flex flex-row justify-between">
              <Text className="font-roboto text-gray-600">0/100 mastered</Text>
              <Text className="font-roboto text-gray-600">0%</Text>
            </View>
            <View className="h-3 w-full rounded-full border-[1px] border-gray-200 bg-white"></View>
          </View>
          <Icon name="chevron-right" color="#239CAC" size={32} />
        </View>
      </TouchableHighlight>
    </View>
  );
}
