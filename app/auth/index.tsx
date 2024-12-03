import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const IndexAuth = () => {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        source={require("../../assets/images/splash.png")}
        className="w-20  h-20  "
      />
      <Text className="mt-4  mb-4 text-2xl color-[#0086AD]">Insta Health</Text>

      <Text className=" mb-10 text-lg  ">Welcome to Insta Health</Text>
      <View className="mt-8">
        <TouchableOpacity
          onPress={() => {
            router.navigate("/auth/SignUp");
          }}
          className="bg-primary rounded-full py-2  w-3/4 mb-3 border border-primary"
        >
          <Text className="text-white text-center">Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/auth/SignIn");
          }}
          className="bg-white border border-primary rounded-full py-2  w-3/4"
        >
          <Text className="text-primary text-center">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IndexAuth;
