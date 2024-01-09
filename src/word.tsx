import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ProgressType from "../enums/progress-type";
import Button from "./components/ui/button";
import Text from "./components/ui/text";
import ProgressBar from "./components/word/progress-bar";
import { supabase } from "./lib/supabase";

type Word = {
  id: number;
  title: string;
  meaning: string;
};

export default function WordPage({ navigation }: any) {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("words").select("*");
      if (data) {
        setWords(data);
      }
    };

    getData();
  }, []);

  if (words.length === 0) return;
  const word = words[0];

  return (
    <View className="flex h-screen w-full flex-col bg-white px-4">
      <View className="mt-4 flex flex-col items-center justify-between rounded-2xl border-[1px] border-gray-200 bg-primary-light px-8 py-8">
        <Text className="font-dm-bold text-[32px]">{word.title}</Text>
        <Button
          title="See the definition"
          onPress={() => navigation.push("Home")}
          className="mt-8"
        />
      </View>
      <View className="flex flex-col">
        <ProgressBar type={ProgressType.Mastered} total={50} count={25} />
        <ProgressBar type={ProgressType.Reviewing} total={50} count={17} />
        <ProgressBar type={ProgressType.Learning} total={50} count={8} />
      </View>
    </View>
  );
}
