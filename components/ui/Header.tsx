import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { RelativePathString, useRouter } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Back } from "./Back";

interface HeaderIconProps {
  children: React.ReactNode;
  onPress: Function;
}
const HeaderIcon = ({ children, onPress }: HeaderIconProps) => {
  return (
    <TouchableOpacity
      className="items-center flex-row  justify-evenly  p-1  bg-primary/10 rounded-lg"
      style={{ width: 35, height: 30 }}
      onPress={() => onPress()}
    >
      {children}
    </TouchableOpacity>
  );
};

const HeaderMain = () => {
  const router = useRouter();
  return (
    <View className="w-[90%] mx-auto mt-8 justify-between items-center flex-row">
      <View className="flex-row gap-2 items-center ">
        <Image
          source={require("@/assets/images/splash.png")}
          style={{ width: 30, height: 30 }}
          className="rounded-lg"
        />
        <Text className="text-lg font-semibold">Insta Health</Text>
      </View>
      <View className="flex-row gap-2 items-center">
        <HeaderIcon
          onPress={() => {
            router.navigate("/(tabs)/home/notification");
          }}
        >
          <FontAwesome name="bell" size={18} color="#0086AD" />
        </HeaderIcon>
        <HeaderIcon
          onPress={() => {
            // router.navigate("/(tabs)/home/notification");
          }}
        >
          <AntDesign name="heart" size={18} color="#0086AD" />
        </HeaderIcon>
      </View>
    </View>
  );
};

export const HeaderWithLabel = () => {
  return <View></View>;
};

export const HeaderWithLabelWithIcon = ({
  label,
  children,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <View className="flex flex-row justify-between">
      <View>
        <Back label={label} className="text-lg ml-6  font-semibold" />
      </View>
      {children}
    </View>
  );
};

export default HeaderMain;
