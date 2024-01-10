import React from "react";
import { View } from "react-native";
import Word from "../../types/word.type";
import Button from "../ui/button";
import Text from "../ui/text";

type Props = {
  word: Word;
};

export default function WordTitleSide({ word }: Props) {  
  return (
    <View className="mt-4 flex flex-col items-center justify-between rounded-2xl border-[1px] border-gray-200 bg-primary-light px-8 py-8">
      <Text className="font-dm-bold text-[32px]">{word.title}</Text>
      <Button title="See the definition" onPress={() => {}} />
    </View>
  );
}
