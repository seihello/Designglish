import React from "react";
import { View } from "react-native";
import ProgressType from "../../../enums/progress-type";
import Text from "../ui/text";

type Props = {
  type: ProgressType;
  count: number;
  total: number;
};

export default function ProgressBar({ type, total, count }: Props) {
  const bgColor =
    type === ProgressType.Mastered
      ? "bg-primary-main"
      : type === ProgressType.Reviewing
        ? "bg-yellow-main"
        : type === ProgressType.Learning
          ? "bg-red-main"
          : "";

  return (
    <View className="mt-4">
      <View className="flex flex-row justify-between">
        <Text className="font-roboto text-xs text-gray-600">{`${count}/${total} ${type.toString()}`}</Text>
        <Text className="text-xs text-gray-600">{`${Math.round(
          (count / total) * 100,
        )}%`}</Text>
      </View>
      <View className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-300">
        <View
          className={`h-2 ${bgColor}`}
          style={{
            width: `${Math.round((count / total) * 100)}%`,
          }}
        ></View>
      </View>
    </View>
  );
}
