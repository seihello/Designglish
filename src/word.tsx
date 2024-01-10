import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ProgressType from "../enums/progress-type";
import ProgressBar from "./components/word/progress-bar";
import WordTitleSide from "./components/word/word-title-side";
import WordMeaningSide from "./components/word/word-meaning-side";
import { supabase } from "./lib/supabase";
import Word from "./types/word.type";

export default function WordPage({ navigation }: any) {
  const [words, setWords] = useState<Word[]>([]);
  const [isTitleSide, setIsTitleSide] = useState(false);

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
    <View className="flex h-screen w-full flex-col px-4 py-8" style={{
      backgroundColor: isTitleSide ? "white" : "#F1FBFB"
    }}>
      {isTitleSide ? (
        <WordTitleSide word={word} />
      ) : (
        <WordMeaningSide word={word} />
      )}
      <View className="flex flex-col">
        <ProgressBar type={ProgressType.Mastered} total={50} count={25} />
        <ProgressBar type={ProgressType.Reviewing} total={50} count={17} />
        <ProgressBar type={ProgressType.Learning} total={50} count={8} />
      </View>
    </View>
  );
}
