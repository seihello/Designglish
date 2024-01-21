import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ProgressType from "../enums/progress-type";
import ProgressBar from "./components/word/progress-bar";
import WordMeaningSide from "./components/word/word-meaning-side";
import WordTitleSide from "./components/word/word-title-side";
import getCourseWords from "./lib/progress/get-course-words";
import Word from "./types/word.type";

export default function WordPage({ navigation }: any) {
  const [words, setWords] = useState<Word[]>([]);
  const [isTitleSide, setIsTitleSide] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const toNext = () => {
    const finishCourse = () => {
      navigation.push("Home");
    };

    if (activeIndex < words.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      finishCourse();
    }

    setIsTitleSide(true);
  };

  const showMeaning = () => {
    setIsTitleSide(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const words = await getCourseWords();
        setWords(words);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  if (words.length === 0) return;
  const word = words[activeIndex];

  return (
    <View
      className="flex h-screen w-full flex-col px-4 py-8"
      style={{
        backgroundColor: isTitleSide ? "white" : "#F1FBFB",
      }}
    >
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
