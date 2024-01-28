import React, { useEffect, useState } from "react";
import { Image, TouchableHighlight, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import getCourseProgress from "../../lib/progress/get-course-progress";
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

  useEffect(() => {
    const setProgress = async () => {
      const { total, masteredCount } = await getCourseProgress();
      setTotal(total);
      setMasteredCount(masteredCount);
      setLoading(false);
    };

    setProgress();
  }, []);

  if (loading) return;

  return (
    <View className="mt-2">
      <TouchableHighlight
        onPress={() => navigation.push("Word")}
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
