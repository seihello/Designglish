import React, { useEffect } from "react";
import { Button, View } from "react-native";
import { supabase } from "./lib/supabase";

export default function HomePage(props: any) {

  return (
    <View className="h-1/2 w-full">
      <View className="flex flex-row items-center justify-between px-8 py-2">
        <Button title="Go to word" onPress={() => props.navigation.push("word")} />
      </View>
    </View>
  );
}
