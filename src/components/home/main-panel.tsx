import React, { useEffect, useState } from "react";
import { View } from "react-native";
import getAllPhases from "../../lib/phases/get-all-phases";
import Phase from "../../types/phase.type";
import Text from "../ui/text";
import CategoryChips from "./category-chips";
import CourseCard from "./course-card";

export default function HomeMainPanel({ navigation }: any) {
  const [phases, setPhases] = useState<Phase[]>([]);
  const [isLoadingPhases, setIsLoadingPhases] = useState<boolean>(true);
  useEffect(() => {
    const run = async () => {
      try {
        const phases = await getAllPhases();
        setPhases(phases);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingPhases(false);
      }
    };
    run();
  }, []);

  return (
    <View className="mt-12 flex flex-col items-center justify-center rounded-2xl bg-white px-4 py-6">
      <Text className="font-dm-bold text-[28px]">Vocab being learned</Text>
      <CategoryChips />
      {isLoadingPhases ? (
        <Text>Loading...</Text>
      ) : phases.length > 0 ? (
        <>
          {phases.map((phase, index) => (
            <CourseCard key={index} navigation={navigation} phase={phase} />
          ))}
        </>
      ) : (
        <Text>No courses for this category.</Text>
      )}
    </View>
  );
}
