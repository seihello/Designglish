import React from "react";
import { TouchableOpacity } from "react-native";
import Text from "./text";

type Props = {
  title: string;
  onPress: () => void;
  className?: string;
};

export default function Button({ title, onPress, className, ...rest }: Props) {

  return (
    <TouchableOpacity
      onPress={onPress}
      className={"flex w-full items-center justify-center rounded-full py-2".concat(className || "")}
      activeOpacity={0.8}
      {...rest}
    >
      <Text
        className={
          "flex w-auto flex-row items-center justify-center font-dm-bold text-base text-white"
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}