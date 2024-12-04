import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Back } from "@/components/ui/Back";
import PasswordInput from "@/components/ui/passwordInput";
import { useRouter } from "expo-router";

const ResetPasswordScreen = () => {
  const router = useRouter()
  return (
    <View className="flex-1 bg-white items-center">
      <View className="items-start w-full">

      <Back label="reset password" className="text-lg font-semibold ml-4" />
      </View>
      <Text className="text-lg font-semibold my-4 pl-7 w-full text-start">create new password</Text>
      <View>
        <View className="w-[90%]">
          <Text> new password</Text>

          <PasswordInput placeholder="" />
        </View>
        <View className="w-[90%]">
          <Text> confirm password</Text>
          <PasswordInput placeholder="" />
        </View>
      </View>
      <TouchableOpacity
          className="bg-primary rounded-full py-2 w-[90%] mt-auto mb-10"
          onPress={() => {
            //function to create an account
            router.navigate("/auth/Password/Congrats")
          }}
        >
          <Text className="text-center text-white text-lg font-bold ">
            Save
          </Text>
        </TouchableOpacity>
    </View>
  );
};

export default ResetPasswordScreen;
