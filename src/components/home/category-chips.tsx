import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import getAllCategories from "../../lib/categories/get-all-categories";
import Category from "../../types/category.type";
import Text from "../ui/text";

export default function CategoryChips() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const run = async () => {
      try {
        const categories = await getAllCategories();
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    };
    run();
  }, []);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="mt-2 flex flex-row gap-x-2">
        {categories.map((category, index) => (
          <View key={index} className="rounded-xl bg-primary-100 px-4 py-2">
            <Text className="font-dm-bold text-primary-900">
              {category.name}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
