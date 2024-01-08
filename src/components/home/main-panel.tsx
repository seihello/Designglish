import React from "react";
import { View } from "react-native";
import Text from "../ui/text";
import CategoryChips from "./category-chips";

export default function HomeMainPanel() {
  return (
    <View className="flex flex-col items-center justify-center rounded-2xl bg-white px-4 py-6 mt-12">
      <Text className="font-dm-bold text-[28px]">Vocab being learned</Text>
      <CategoryChips />
    </View>
  );
}
