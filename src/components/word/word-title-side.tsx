import React from "react";
import { View } from "react-native";
import Word from "../../types/word.type";
import Button from "../ui/button";
import Text from "../ui/text";

type Props = {
  word: Word;
  showMeaning: () => void;
};

export default function WordTitleSide({ word, showMeaning }: Props) {
  return (
    <View className="mt-4 flex flex-col items-center justify-between rounded-2xl border-[1px] border-gray-200 bg-primary-light px-8 py-8">
      <Text className="font-dm-bold text-[32px]">{word.title}</Text>
      <Button
        className="mt-4 bg-primary-main"
        title="See the definition"
        onPress={() => {
          showMeaning();
        }}
      />
    </View>
  );
}
