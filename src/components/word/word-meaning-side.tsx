import React from "react";
import { View } from "react-native";
import Progress from "../../enum/progress.enum";
import Word from "../../types/word.type";
import Button from "../ui/button";
import Chip from "../ui/chip";
import Text from "../ui/text";

type Props = {
  word: Word;
  updateProgress: (wordId: number, progress: Progress) => Promise<void>;
  toNext: () => void;
};

export default function WordMeaningSide({
  word,
  updateProgress,
  toNext,
}: Props) {
  const onPressedKnown = async () => {
    switch (word.progress) {
      case Progress.New:
        await updateProgress(word.id, Progress.Mastered);
        break;
      case Progress.Learning:
        await updateProgress(word.id, Progress.Reviewing);
        break;
      case Progress.Reviewing:
        await updateProgress(word.id, Progress.Mastered);
        break;
      case Progress.Mastered:
      default:
        // do nothing
        // Mastered words should not disappear
        break;
    }
    toNext();
  };

  const onPressedUnknown = async () => {
    switch (word.progress) {
      case Progress.New:
        await updateProgress(word.id, Progress.Learning);
        break;
      case Progress.Learning:
      case Progress.Reviewing:
      // do nothing
      case Progress.Mastered:
      default:
        // do nothing
        // Mastered words should not disappear
        break;
    }
    toNext();
  };

  return (
    <View className="items-between flex flex-col gap-y-4 rounded-2xl border-[1px] border-gray-200 bg-white px-8 pb-8 pt-4">
      <View className="flex flex-col items-center">
        <Text className="font-dm-bold text-[32px] text-gray-800">
          {word.title}
        </Text>
        <Text className="font-roboto-italic text-primary-main">{word.ipa}</Text>
      </View>

      <View className="flex flex-col gap-y-2">
        <Text className="w-full text-left font-dm-bold text-base text-gray-600">
          [{word.parts.join(" / ")}]
        </Text>
        <Text className="font-roboto text-gray-600">{word.meaning}</Text>
      </View>

      {word.synonyms.length > 0 && (
        <View className="flex flex-col gap-y-2">
          <Text className="w-full text-left font-dm-bold text-base text-gray-600">
            Synonym
          </Text>

          <View className="flex flex-row flex-wrap gap-x-1 gap-y-1">
            {word.synonyms.map((synonym: string, index: number) => (
              <Chip key={index}>{synonym}</Chip>
            ))}
          </View>
        </View>
      )}

      <View className="flex flex-col gap-y-2">
        <Text className="w-full text-left font-dm-bold text-base text-gray-600">
          Example
        </Text>
        {word.sentences.map((sentence: string, index: number) => (
          <Text key={index} className="font-roboto text-gray-600">
            {sentence}
          </Text>
        ))}
      </View>

      <View className="flex w-full flex-col gap-y-4">
        <Button
          title="I knew this word"
          onPress={onPressedKnown}
          className="bg-primary-main"
        />
        <Button
          title="I didn't know this word"
          onPress={onPressedUnknown}
          className="bg-red-main"
        />
      </View>
    </View>
  );
}
