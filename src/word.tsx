import React, { useEffect, useState } from "react";
import { View } from "react-native";
import ProgressType from "../enums/progress-type";
import ProgressBar from "./components/word/progress-bar";
import WordMeaningSide from "./components/word/word-meaning-side";
import WordTitleSide from "./components/word/word-title-side";
import Progress from "./enum/progress.enum";
import getCourseWords from "./lib/progress/get-course-words";
import updateWordProgress from "./lib/progress/update-word-progress";
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

  const updateProgress = async (wordId: number, progress: Progress) => {
    try {
      await updateWordProgress(wordId, progress);
      const newWords = words.map((word: Word) => {
        return word.id === wordId ? { ...word, progress } : word;
      });
      setWords(newWords);
    } catch (error) {
      console.error(error);
    }
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

  let masteredCount = 0;
  let reviewingCount = 0;
  let learningCount = 0;
  for (const word of words) {
    switch (word.progress) {
      case Progress.Mastered:
        masteredCount += 1;
        break;
      case Progress.Reviewing:
        reviewingCount += 1;
        break;
      case Progress.Learning:
        learningCount += 1;
        break;
      default:
        break;
    }
  }

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
        <WordMeaningSide
          word={word}
          updateProgress={updateProgress}
          toNext={toNext}
        />
      )}
      <View className="flex flex-col">
        <ProgressBar
          type={ProgressType.Mastered}
          total={words.length}
          count={masteredCount}
        />
        <ProgressBar
          type={ProgressType.Reviewing}
          total={words.length}
          count={reviewingCount}
        />
        <ProgressBar
          type={ProgressType.Learning}
          total={words.length}
          count={learningCount}
        />
      </View>
    </View>
  );
}
