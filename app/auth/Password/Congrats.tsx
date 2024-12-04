import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import LoadingModal from "@/components/ui/LoadingModal";
import { useRouter } from "expo-router";

const Congrats = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-white items-center ">
      <LoadingModal visible={false}/>
      <View className=" w-full items-center my-auto">
        <Image
          source={require("@/assets/images/splash.png")}
          className="w-20  h-20  "
        />
        <Text className="mt-4  mb-4 text-2xl color-[#0086AD]">
          Insta Health
        </Text>

        <Text className=" mb-10 text-lg  w-full text-center">
          Your account us ready to use
        </Text>
      </View>
      <TouchableOpacity
        className="bg-primary rounded-full py-2 w-[90%] mt-auto mb-10"
        onPress={() => {
          // @ts-expect-error 
            router.navigate("/(tabs)/home")
        }}
      >
        <Text className="text-center text-white text-lg font-bold ">
          Navigate to home page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Congrats;
