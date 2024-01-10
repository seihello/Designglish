import { View } from "react-native";
import Text from "./text";

export default function Chip(props: any) {
  const { children, ...rest } = props;

  return (
    <View
      className="flex items-center justify-center rounded-full bg-primary-light px-2 py-1 "
      {...rest}
    >
      <Text className="font-dm-bold text-sm text-primary-main">{children}</Text>
    </View>
  );
}
