import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { Back } from "@/components/ui/Back";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import DoctorsDisplayView from "@/components/ui/DoctorsDisplayView";

const HomeSearch = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <View className="flex-1 bg-white  pt-2">
      <View className="flex flex-row justify-between items-center w-[90%] mx-auto">
        <Back />
        <View className="flex-row justify-between  flex-1  bg-gray-50 shadow items-center rounded-full  mx-auto px-3">
          <TextInput
            className="p-2    px-4 flex-1"
            onChange={(e) => setSearch(e.nativeEvent.text)}
            placeholder="search"
          ></TextInput>
          <EvilIcons name="search" size={24} color="black" />
        </View>
      </View>

      <DoctorsDisplayView />
    </View>
  );
};

export default HomeSearch;
