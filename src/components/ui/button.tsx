import React from "react";
import { TouchableHighlight } from "react-native";
import Text from "./text";

export default function Button({ title, onPress, ...rest }: any) {
  return (
    <TouchableHighlight
      className="flex w-full items-center justify-center rounded-full bg-primary-main py-3 active:bg-primary-light"
      onPress={onPress}
      underlayColor="#56b0bc"
      {...rest}
    >
      <Text
        className={
          "flex w-auto flex-row items-center justify-center font-dm-bold text-base text-white"
        }
      >
        {title}
      </Text>
    </TouchableHighlight>
  );
}
