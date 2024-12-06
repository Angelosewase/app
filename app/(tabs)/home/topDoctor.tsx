import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { HeaderWithLabelWithIcon } from "@/components/ui/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import DoctorsDisplayView from "@/components/ui/DoctorsDisplayView";

const TopDoctor = () => {
  return (
    <View className="flex-1 bg-white pt-2">
      <View className="w-[90%] mx-auto">
      <HeaderWithLabelWithIcon label="Top Doctors">
        <TouchableOpacity className="bg-primary/20 p-1 items-center justify-center rounded" style={{ width: 25, height: 25 }}>
          <Ionicons name="filter" size={15} color="#0086AD" />
        </TouchableOpacity>
      </HeaderWithLabelWithIcon>

      </View>

      <DoctorsDisplayView />
    </View>
  );
};

export default TopDoctor;
