import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { Button } from "react-native-paper";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Back } from "@/components/ui/Back";
import Input from "@/components/ui/Input";
import { Picker } from "@react-native-picker/picker";

const ProfileScreen = () => {
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const handleGenderChange = (newGender: string) => setGender(newGender);
  const handleAgeChange = (newAge: string) => setAge(newAge);
  const handleLocationChange = (newLocation: string) => setLocation(newLocation);

  return (
    <View className="flex-1 bg-white">
      <Back label="profile" />
      <View className="flex-1 p-4 items-center">
        <View className="border border-gray-200 h-40 w-[90%] rounded-lg flex items-center justify-center ">
          <Text className="text-gray-500 text-center">Upload profile pictures</Text>
        </View>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => handleGenderChange(itemValue)}
          style={{ width: '90%' }}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
        </Picker>

        <Input
          placeholder="Age"
          value={age}
          keyboardType="numeric"
          onChangeText={handleAgeChange}
          className="mb-4"
        />

        <Input
          placeholder="Location"
          value={location}
          onChangeText={handleLocationChange}
          className="mb-4"
        />

        <Button mode="contained" onPress={() => console.log("Continue pressed")}>
          Continue
        </Button>
      </View>
    </View>
  );
};

export default ProfileScreen;

