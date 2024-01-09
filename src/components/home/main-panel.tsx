import React from "react";
import { View } from "react-native";
import Text from "../ui/text";
import CategoryChips from "./category-chips";
import CourseCards from "./course-cards";

export default function HomeMainPanel({ navigation }: any) {
  return (
    <View className="mt-12 flex flex-col items-center justify-center rounded-2xl bg-white px-4 py-6">
      <Text className="font-dm-bold text-[28px]">Vocab being learned</Text>
      <CategoryChips />
      <CourseCards navigation={navigation}/>
    </View>
  );
}
