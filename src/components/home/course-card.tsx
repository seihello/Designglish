import React from "react";
import { Alert, Image, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Progress from "../../enum/progress.enum";
import resetWordProgress from "../../lib/progress/reset-word-progress";
import Phase from "../../types/phase.type";
import WordInfo from "../../types/word-info.type";
import Text from "../ui/text";

const PHASE_IMAGES = {
  1: require(`../../../assets/img/phases/1.png`),
  2: require(`../../../assets/img/phases/2.png`),
  3: require(`../../../assets/img/phases/3.png`),
  4: require(`../../../assets/img/phases/4.png`),
  5: require(`../../../assets/img/phases/5.png`),
};

type Props = {
  navigation: any;
  categoryId: number;
  phase: Phase;
  wordInfoList: WordInfo[];
};

export default function CourseCard({
  navigation,
  categoryId,
  phase,
  wordInfoList,
}: Props) {
  const reset = async () => {
    Alert.alert("Reset progress", "", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Reset"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: async () => {
          await resetWordProgress();
          // await setProgress();
        },
      },
    ]);
  };

  const masteredCount = wordInfoList.filter(
    (wordInfo) => wordInfo.progress === Progress.Mastered,
  ).length;

  return (
    <View className="mt-2">
      <TouchableHighlight
        onPress={() =>
          navigation.push("Word", {
            wordIds: wordInfoList.map((wordInfo) => wordInfo.id),
            phaseName: phase.name,
          })
        }
        onLongPress={reset}
        underlayColor="white"
        className="w-full"
      >
        <View className="mt-2 flex w-full flex-row items-center overflow-hidden rounded-xl bg-primary-100">
          <Image
            source={
              phase.id === 1
                ? PHASE_IMAGES[1]
                : phase.id === 2
                  ? PHASE_IMAGES[2]
                  : phase.id === 3
                    ? PHASE_IMAGES[3]
                    : phase.id === 4
                      ? PHASE_IMAGES[4]
                      : PHASE_IMAGES[5]
            }
          />
          <View className="flex flex-1 flex-col  p-4">
            <Text className="font-dm-bold text-lg">{phase.name}</Text>
            <View className="mt-2 flex flex-row justify-between">
              <Text className="font-roboto text-xs text-gray-700">
                {masteredCount}/{wordInfoList.length} mastered
              </Text>
              <Text className="font-roboto text-xs text-gray-700">
                {wordInfoList.length === 0
                  ? 0
                  : Math.round((masteredCount / wordInfoList.length) * 100)}
                %
              </Text>
            </View>
            <View className="w-full overflow-hidden rounded-full border-[1px] border-gray-200 bg-white text-xs">
              <View
                className="h-2 bg-primary-900"
                style={{
                  width: `${
                    wordInfoList.length === 0
                      ? 0
                      : Math.round((masteredCount / wordInfoList.length) * 100)
                  }%`,
                }}
              ></View>
            </View>
          </View>
          <Icon name="chevron-right" color="#239CAC" size={32} />
        </View>
      </TouchableHighlight>
    </View>
  );
}
