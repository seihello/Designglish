import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import ProgressType from "../../../enums/progress-type";
import Text from "../ui/text";

type Props = {
  type: ProgressType;
  count: number;
  total: number;
};

export default function ProgressBar({ type, total, count }: Props) {
  const transitWidth = useRef(new Animated.Value(0)).current;

  const updateWidth = (width: number) => {
    Animated.timing(transitWidth, {
      toValue: width,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    updateWidth(Math.round((count / total) * 100));
  }, [total, count]);

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
        <Text className="font-roboto text-xs text-gray-600">{`${Math.round(
          (count / total) * 100,
        )}%`}</Text>
      </View>
      <View className="mt-1 h-2 w-full overflow-hidden rounded-full bg-gray-300">
        <Animated.View
          className={`h-2 ${bgColor}`}
          style={{
            // width: `${Math.round((count / total) * 100)}%`,
            width: transitWidth.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          }}
        ></Animated.View>
      </View>
    </View>
  );
}
