import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { HeaderWithLabelWithIcon } from "@/components/ui/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  specializationColors,
  specializationData,
  specializationIcons,
} from "@/data/placeholderData";
import { SpecializationTouchableView } from ".";
import { FontAwesome5 } from "@expo/vector-icons";

const SpecialDoctor = () => {
  return (
    <View className="flex-1 bg-white px-3 pt-4">
      <HeaderWithLabelWithIcon label="Specialist doctor">
        <TouchableOpacity className="bg-primary/50 p-1 rounded">
          <Ionicons name="filter" size={20} color="white" />
        </TouchableOpacity>
      </HeaderWithLabelWithIcon>
      <View className="w-[90%] mx-auto flex-row  gap-2 h-48 mt-4 grid grid-rows-2">
        {specializationData.map((val, idx) => (
          <View key={idx} className="w-1/2 h-[125px]">
            <SpecializationTouchableView
              specializationName={val.specialization}
              number={val.numDoctors}
              color={specializationColors[idx]}
            >
              <View className="w-full justify-center px-8 py-2 -mb-5">
                <FontAwesome5
                  name={specializationIcons[idx]}
                  size={40}
              
                  color="white"
                  key={idx}
                />
              </View>
            </SpecializationTouchableView>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SpecialDoctor;
