import React from "react";
import { ScrollView, View } from "react-native";
import Text from "../ui/text";

const categories = [
  "UX / Product",
  "UI / Graphic",
  "3D",
  "Game",
  "Sample1",
  "Sample2",
];

export default function CategoryChips() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row gap-x-2 mt-2">
        {categories.map((category) => (
          <View className="rounded-xl bg-primary-light px-4 py-2">
            <Text className="font-dm-bold text-primary-main">{category}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
