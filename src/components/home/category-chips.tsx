import React from "react";
import { ScrollView, TouchableHighlight, View } from "react-native";
import Category from "../../types/category.type";
import Text from "../ui/text";

type Props = {
  categories: Category[];
  selectedCategoryId: number;
  setSelectedCategoryId: (value: number) => void;
};

export default function CategoryChips({
  categories,
  selectedCategoryId,
  setSelectedCategoryId,
}: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="mt-2 flex flex-row gap-x-2">
        {categories.map((category, index) => (
          <TouchableHighlight
            key={index}
            onPress={() => setSelectedCategoryId(category.id)}
            underlayColor="white"
          >
            <View className="rounded-xl bg-primary-100 px-4 py-2">
              <Text className="font-dm-bold text-primary-900">
                {category.name}
              </Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </ScrollView>
  );
}
