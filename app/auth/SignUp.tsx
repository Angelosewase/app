import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { FacebookButton, GoogleButton } from "@/components/ui/buttons";
import PasswordInput from "@/components/ui/passwordInput";
import { Checkbox } from "react-native-paper";
import { useRouter } from "expo-router";
import Input from "@/components/ui/Input";

const SignupScreen = () => {
  const [agree, setAgree] = React.useState(false);
  const router  = useRouter()
  return (
    <View className="flex-1 bg-white  px-6">
      {/* Logo Section */}
      <View className="items-center mt-12 mb-6">
        <Image
          source={require("@/assets/images/splash.png")} // Replace with your logo
          className="w-20 h-20 "
        />
        <Text className="text-2xl font-bold text-blue-600 mt-4">
          Insta Health
        </Text>
        <Text className="text-gray-500 mt-2">Create your free account</Text>
      </View>

      {/* Input Fields */}
      <View className="space-y-4">
        <Input
          placeholder="Username"
          className="border-2 border-gray-200 rounded-lg px-4 py-2 "
        />
        <Input
          placeholder="Email"
          className="border-2 border-gray-200 rounded-lg px-4 py-2  mt-2"
          keyboardType="email-address"
        />
        <PasswordInput placeholder="Password" />
      </View>

      {/* Social Sign Up Section */}
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

      {/* Terms and Policy */}
      <View className="flex-row items-start space-x-2 mb-4">
        <Checkbox
          status={agree ? "checked" : "unchecked"}
          onPress={() => setAgree(!agree)}
        />
        <Text className="text-sm text-gray-500 flex-1">
          By creating an account, you agree to our{" "}
          <Text className="text-blue-600">Terms of use</Text> and{" "}
          <Text className="text-blue-600">Privacy Policy</Text>.
        </Text>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity className="bg-blue-600 rounded-full py-2 " onPress={()=>{
        //function to create an account
        router.navigate("/auth/SetupProfile")
      }}>
        <Text className="text-center text-white text-lg font-bold ">
          Create an account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
