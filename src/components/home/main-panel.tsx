import { Skeleton } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import getAllCategories from "../../lib/categories/get-all-categories";
import getAllPhases from "../../lib/phases/get-all-phases";
import getAllWordInfo from "../../lib/progress/get-all-word-info";
import Category from "../../types/category.type";
import Phase from "../../types/phase.type";
import WordInfo from "../../types/word-info.type";
import Text from "../ui/text";
import CategoryChips from "./category-chips";
import CourseCard from "./course-card";

export default function HomeMainPanel({ navigation }: any) {
  const [wordInfoList, setWordInfoList] = useState<WordInfo[]>([]);
  const [phases, setPhases] = useState<Phase[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const run = async () => {
      try {
        const categories = await getAllCategories();
        setCategories(categories);
        const phases = await getAllPhases();
        setPhases(phases);
        const wordInfoList = await getAllWordInfo();
        setWordInfoList(wordInfoList);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    run();
  }, []);

  // Filtered word IDs for each phase
  const filteredWordInfoList: Array<Array<WordInfo>> = [];
  for (let i = 0; i < phases.length; i++) {
    filteredWordInfoList.push(
      wordInfoList.filter(
        (wordInfo) =>
          (selectedCategoryId === -1 ||
            wordInfo.categoryIds.includes(selectedCategoryId)) &&
          wordInfo.phaseIds.includes(i),
      ),
    );
  }

  // Just in case
  if (filteredWordInfoList.length !== phases.length) return;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="absolute h-screen w-full"
    >
      <View className="h-[300px]"></View>
      <View className="flex flex-col items-center rounded-2xl bg-white px-4 py-6">
        <Text className="font-dm-bold text-[28px]">Vocab being learned</Text>

        {isLoading ? (
          <Skeleton
            height={240}
            style={{
              borderRadius: 10,
              marginTop: 16,
              width: "95%",
              opacity: 0.2,
            }}
          />
        ) : (
          <>
            <CategoryChips
              categories={categories}
              selectedCategoryId={selectedCategoryId}
              setSelectedCategoryId={setSelectedCategoryId}
            />
            {phases.length > 0 ? (
              <>
                {phases.map((phase, index) => (
                  <CourseCard
                    key={index}
                    navigation={navigation}
                    categoryId={selectedCategoryId}
                    phase={phase}
                    wordInfoList={filteredWordInfoList[index]}
                  />
                ))}
              </>
            ) : (
              <Text>No courses for this category.</Text>
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
}
