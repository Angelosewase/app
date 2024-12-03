import {
  View,
  Text,
  Touchable,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Back } from "@/components/ui/Back";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

const ForgotPasswordIndex = () => {
  const [isActiveEmail, setIsActiveEmail] = React.useState(false);
  const [isActivePhone, setIsActivePhone] = React.useState(false);
  const router = useRouter();
  return (
    <View className="bg-white flex-1 ">
      <Back label="Forgot password" className="text-lg font-semibold ml-4" />
      <Text className="text-gray-500 mt-8 w-[90%] mx-auto">
        Select which contact details should we use to reset your account's
        details{" "}
      </Text>
      <View className="mt-10">
        <ContactDetails
          label="Email"
          value="3H4dC@example.com"
          icon={<AntDesign name="mail" size={24} color="#0086AD" />}
          isActive={isActiveEmail}
          onclick={() => {
            setIsActiveEmail(true);
            setIsActivePhone(false);
          }}
        />
        <ContactDetails
          label="Phone"
          value="+91 1234567890"
          icon={<AntDesign name="message1" size={24} color="#0086AD" />}
          onclick={() => {
            setIsActivePhone(true);
            setIsActiveEmail(false);
          }}
          isActive={isActivePhone}
        />
      </View>
      <TouchableOpacity
        className={
          " bg-primary w-[90%] rounded-full p-3 items-center justify-center mx-auto mt-auto mb-10 " +
          (!isActiveEmail && !isActivePhone ? "opacity-50" : "")
        }
        onPress={() => router.navigate("/auth/Password/OtpVerification")}
        disabled={!isActiveEmail && !isActivePhone}
      >
        <Text className="text-white">Continue </Text>
      </TouchableOpacity>
    </View>
  );
};

interface contactDetailsProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onclick?: Function;
}

const ContactDetails = ({
  label,
  value,
  icon,
  isActive,
  onclick,
}: contactDetailsProps) => {
  return (
    <TouchableOpacity
      className={`flex-row items-center space-x-2 mb-4  px-2 py-4 bg-white pl-4 shadow-lg w-[90%] mx-auto rounded-lg ${
        isActive && "border border-primary "
      }`}
      onPress={() => onclick && onclick()}
    >
      <View className="p-4 bg-primary/10 rounded-full">{icon}</View>
      <View className="space-y-1 ml-4">
        <Text className="text-sm text-gray-500">{label}</Text>
        <Text className="text-base font-semibold">{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ForgotPasswordIndex;
