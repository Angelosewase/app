import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back } from "@/components/ui/Back";
import { useRouter } from "expo-router";

interface otpInputProps {
  value: string;
  onChangeText: (value: string) => void;
  maxLength: number;
}
const OtpInput = (props: otpInputProps) => {
  const { value, onChangeText, maxLength } = props;

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      maxLength={maxLength}
      keyboardType="decimal-pad"
      className="w-14 h-14 border-2 border-gray-300 rounded-xl font-semibold text-2xl  text-center justify-center items-center6 "
    />
  );
};

const OtpVerification = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = React.useState(true);
  const onChangeText = (index: number) => (value: string) =>
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp.join("");
    });

  return (
    <SafeAreaView className="bg-white flex-1">
      <Back label="Forgot password" className="text-lg font-semibold ml-4" />
      <View className="w-full my-auto ">
        <View className="mb-8 mt-14">
          <Text className="text-gray-400 text-sm  text-center">
            code has been sent to your email or phoneNumber
          </Text>
        </View>
        <View className="flex-1">
          <View className="flex-row  justify-evenly w-[80%] self-center ">
            {[0, 1, 2, 3, 4].map((index) => (
              <OtpInput
                key={index}
                value={otp[index]}
                onChangeText={onChangeText(index)}
                maxLength={1}
              />
            ))}
          </View>

          <Text className=" text-gray-500  text-sm w-full text-center">
            Resend again in <Text className="text-primary">1 min</Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity
        className={
          " bg-primary w-[90%] rounded-full p-3 items-center justify-center mx-auto mt-auto mb-10 " +
          (!isVerified ? "opacity-50" : "")
        }
        onPress={() => router.navigate("/auth/Password/OtpVerification")}
        disabled={!isVerified}
      >
        <Text className="text-white">verify otp </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OtpVerification;
