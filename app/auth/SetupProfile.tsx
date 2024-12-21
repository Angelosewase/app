import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Back } from "@/components/ui/Back";
import Input, { InputWithLabel } from "@/components/ui/Input";
import { Picker } from "@react-native-picker/picker";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

const ProfileScreen = () => {
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const handleGenderChange = (newGender: string) => setGender(newGender);
  const handleAgeChange = (newAge: string) => setAge(newAge);
  const handleLocationChange = (newLocation: string) =>
    setLocation(newLocation);

  return (
    <View className="flex-1 bg-white">
      <Back label="profile" className="ml-4 mt-4" />
      <View className="flex-1 p-4 items-center">
        <TouchableOpacity className="shadow  h-40 w-[90%] rounded flex items-center justify-center ">
          <Feather name="upload-cloud" size={24} color="black" />
          <Text className="text-gray-500 text-center">
            Upload profile pictures
          </Text>
        </TouchableOpacity>
        <Text className="text-base text-gray-500 text-start w-[90%]">
          Gender
        </Text>
        <View className="w-[90%] border border-gray-200 rounded-lg p-0 ">
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => handleGenderChange(itemValue)}
            style={{ width: "100%", padding: 0, margin: 0 }}
            itemStyle={{ padding: 0, margin: 0, fontSize: 10, height: 45 }}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        <InputWithLabel
          label="Age"
          className="w-full border border-gray-200  rounded-lg "
          value={age}
        />
        <InputWithLabel
          label="Location"
          className="w-full border border-gray-200  rounded-lg "
          value={location}
        />

        <TouchableOpacity
          className=" bg-primary w-[90%] rounded-full p-3 items-center justify-center"
          onPress={() => router.navigate("/(tabs)/home")}
        >
          <Text className="text-white">Continue </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
