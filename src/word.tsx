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
  const [isTitleSide, setIsTitleSide] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const toNext = () => {
    setActiveIndex((prev: number) => {
      return prev < words.length - 1 ? prev + 1 : prev;
    })
    setIsTitleSide(true);
  }

  const showMeaning = () => {
    setIsTitleSide(false);
  }

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("words").select("*, sentences(sentence)");
      if (data) {
        setWords(() => {
          return data.map((row) => {
            const sentences = row.sentences.map((sentence: any) => sentence.sentence)
            return { ...row, sentences }
          });
        });
      }
    };

    getData();
  }, []);

  if (words.length === 0) return;
  const word = words[activeIndex];

  return (
    <View className="flex h-screen w-full flex-col px-4 py-8" style={{
      backgroundColor: isTitleSide ? "white" : "#F1FBFB"
    }}>
      {isTitleSide ? (
        <WordTitleSide word={word} showMeaning={showMeaning} />
      ) : (
        <WordMeaningSide word={word} toNext={toNext} />
      )}
      <View className="flex flex-col">
        <ProgressBar type={ProgressType.Mastered} total={50} count={25} />
        <ProgressBar type={ProgressType.Reviewing} total={50} count={17} />
        <ProgressBar type={ProgressType.Learning} total={50} count={8} />
      </View>
    </View>
  );
}
