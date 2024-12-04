import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  FlatList,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import HeaderMain from "@/components/ui/Header";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useRouter } from "expo-router";
import {
  doctorsData,
  specializationColors,
  specializationData,
  specializationIcons,
} from "@/data/placeholderData";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export const SpecializationTouchableView = ({
  children,
  number,
  specializationName,
  color,
}: specializationTouchableViewProps) => {
  return (
    <TouchableOpacity
      className="h-full flex-1 items-center  rounded-xl"
      style={{ backgroundColor: color }}
    >
      {children}
      <Text className="text-lg text-white font-bold mt-4">
        {specializationName}
      </Text>
      <Text className="text-white text-base w-full text-center">
        {number} doctors
      </Text>
    </TouchableOpacity>
  );
};

const TabsHomeIndex = () => {
  const router = useRouter();
  const [specialization] = useState(specializationData.splice(0, 3));
  const [doctorsDataState] = useState(doctorsData.splice(0, 3));
  return (
    <View className="bg-white flex-1">
      <HeaderMain />
      <TouchableOpacity
        className="bg-gray-50 shadow  rounded-full w-[90%] justify-between mx-auto p-2 px-4 flex-row mt-5 "
        onPress={() => {
          router.navigate("/(tabs)/home/search");
        }}
      >
        <Text className="w-[90%] text-gray-500">search</Text>
        <EvilIcons name="search" size={24} color="black" />
      </TouchableOpacity>
      <View className="w-full mt-5  ">
        <View className="w-[90%] flex-row justify-between mx-auto">
          <Text className="text-base">Specialist doctor</Text>
          <Text className="text-primary text-base" onPress={()=>router.navigate("/(tabs)/home/specialDoctor")}>see all</Text>
        </View>

        <View className="w-[90%] mx-auto flex-row gap-2 h-48 mt-4">
          {specialization.map((val, idx) => (
            <SpecializationTouchableView
              key={idx}
              specializationName={val.specialization}
              number={val.numDoctors}
              color={specializationColors[idx]}
            >
              <View className="w-full justify-center px-8 py-4">
                <FontAwesome5
                  name={specializationIcons[idx]}
                  size={45}
                  color="white"
                  key={idx}
                />
              </View>
            </SpecializationTouchableView>
          ))}
        </View>

        <View className="w-full mt-5 h-52  ">
          <View className="w-[90%] flex-row justify-between mx-auto">
            <Text className="text-base">Top doctors</Text>
            <Text className="text-primary text-base">see all</Text>
          </View>
          <FlatList
            className="h-[80%] ml-auto  gap-4 w-[95%] mt-3"
            horizontal={true}
            data={doctorsDataState}
            showsHorizontalScrollIndicator ={false}
            renderItem={(data) => {
              return (
                <DoctorCard
                  img={data.item.image.uri}
                  name={data.item.name}
                  specialization={data.item.specialization.name}
                />
              );
            }}
          />
        </View>
        <View className="w-[90%] flex-row justify-between mx-auto">
          <Text className="text-base">Recommendations</Text>
          <Text className="text-primary text-base">see all</Text>
        </View>
      </View>
    </View>
  );
};

interface specializationTouchableViewProps {
  children: React.ReactNode;
  number: number;
  specializationName: string;
  color?: string;
}

interface topDoctorProps {
  img: Record<string, ImageSourcePropType>;
  name: string;
  specialization: string;
}

const DoctorCard = ({ name, img, specialization }: topDoctorProps) => {
  const { width } = Dimensions.get("screen");
  return (
    <View className="border rounded-lg border-gray-50 flex-1 mr-2" style={{ width:width/3 }}>
      <Image source={img} style={{ width:'auto', height: 100 }} className="rounded-t-lg"/>
      <Text className="text-sm text-gray-800 w-full text-center mt-2">{name}</Text>
      <Text className="text-xs text-gray-400  w-full text-center">{specialization}</Text>
    </View>
  );
};

export default TabsHomeIndex;
