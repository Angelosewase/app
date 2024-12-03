import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { InputWithLabel } from "@/components/ui/Input";
import PasswordInput from "@/components/ui/passwordInput";
import { Checkbox } from "react-native-paper";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);
  const router = useRouter();

  return (
    <View className="items-center pt-6 mb-6 flex-1 bg-white">
      <Image
        source={require("@/assets/images/splash.png")} // Replace with your logo
        className="w-20 h-20 "
      />
      <Text className="text-2xl font-bold text-primary mt-2">Insta Health</Text>
      <Text className="text-gray-500 mt-4 text-lg  font-semibold ">
        Sign in to your account{" "}
      </Text>
      <View className="w-full items-center">
        <InputWithLabel
          label="Email "
          className="w-full border border-gray-200  rounded-lg "
          value={email}
          keyboardType="email-address"
        />
        <View className="w-[90%]">
          <Text>Password</Text>

          <PasswordInput placeholder="" />
        </View>
        <View className="flex-row items-center space-x-2 mb-2 justify-center pl-4">
          <Checkbox
            status={agree ? "checked" : "unchecked"}
            onPress={() => setAgree(!agree)}
            color="#0086AD"
          />
          <Text className="text-sm text-gray-500 flex-1 ">remember me</Text>
        </View>
        <TouchableOpacity
          className="bg-primary rounded-full py-2 w-[90%] "
          onPress={() => {
            //function to create an account
            // router.navigate("/auth/SetupProfile")
          }}
        >
          <Text className="text-center text-white text-lg font-bold ">
            Sign in
          </Text>
        </TouchableOpacity>
        <Text
          className="w-full text-primary text-center mt-2 text-base"
          onPress={() => {
            router.navigate("/auth/Password");
          }}
        >
          forgot password?
        </Text>
      </View>
      <View className="my-6 w-full">
        <Text className="text-center text-gray-500 mb-2">Or</Text>
        <View className=" flex-row items-center justify-center w-full gap-2   h-26">
          <TouchableOpacity className="bg-gray-50 rounded-lg flex flex-row items-center justify-center px-4 py-2 shadow">
            <MaterialCommunityIcons name="facebook" size={20} color="#3b5998" />
            <Text className="ml-2 text-lg font-bold">Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-50 rounded-lg flex flex-row items-center justify-center px-4 py-2 shadow">
            <MaterialCommunityIcons name="google" size={20} color="#DD4B39" />
            <Text className="ml-2 text-lg font-bold">Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* dont have an account  */}
      <View className="flex-row items-center justify-center">
        <Text>Don't have an account?</Text>
        <Text
          className="text-primary  ml-3"
          onPress={() => router.navigate("/auth/SignUp")}
        >
          Sign up{" "}
        </Text>
      </View>
    </View>
  );
};

export default SignIn;
