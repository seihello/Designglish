import React, { useCallback, useEffect, useState } from "react";
import { Alert, Image, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import getCourseProgress from "../../lib/progress/get-course-progress";
import resetWordProgress from "../../lib/progress/reset-word-progress";
import Text from "../ui/text";

type Props = {
  navigation: any;
  // total: number;
  // masteredCount: number;
};

export default function CourseCards({
  navigation,
  // total,
  // masteredCount,
}: Props) {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [masteredCount, setMasteredCount] = useState(0);

  const setProgress = useCallback(async () => {
    const { total, masteredCount } = await getCourseProgress();
    setTotal(total);
    setMasteredCount(masteredCount);
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log("set Progress home");
    
    setProgress();
  }, [setProgress]);

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
          await setProgress();
          // setMasteredCount(0);
        },
      },
    ]);
  };

  if (loading) return;

  return (
    <View className="mt-2">
      <TouchableHighlight
        onPress={() => navigation.push("Word")}
        onLongPress={reset}
        underlayColor="white"
        className="w-full"
      >
        <View className="mt-2 flex w-full flex-row items-center overflow-hidden rounded-xl bg-primary-light">
          <Image source={require("../../../assets/course-logo-1.png")} />
          <View className="flex flex-1 flex-col  p-4">
            <Text className="font-dm-bold text-lg">Common words</Text>
            <View className="mt-2 flex flex-row justify-between">
              <Text className="font-roboto text-gray-600">
                {masteredCount}/{total} mastered
              </Text>
              <Text className="font-roboto text-gray-600">
                {Math.round((masteredCount / total) * 100)}%
              </Text>
            </View>
            <View className="w-full overflow-hidden rounded-full border-[1px] border-gray-200 bg-white">
              <View
                className="h-2 bg-primary-main"
                style={{
                  width: `${Math.round((masteredCount / total) * 100)}%`,
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
