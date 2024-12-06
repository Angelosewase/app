import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { doctorsData } from "@/data/placeholderData";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Doctor } from "@/data/globals";

const DoctorsDisplayView = () => {
  const filters = ["all", "brain", "cardio", "eye", "dentist", "kidney"];
  const [doctorsDataState] = useState(doctorsData);
  return (
    <View className="mt-4 flex-1 ">
      <FlatList
        data={filters}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <FilterComponent title={item} />}
        className="px-2"
        style={{ maxHeight: 28 }}
      />
      <ScrollView className="">
        {doctorsDataState.map((data, idx) =><DoctorDisplayCard {...data} key={idx} />)}
      </ScrollView>
    </View>
  );
};

interface FilterComponentProps {
  title: string;
  onclick?: Function;
}
const FilterComponent = ({ title, onclick }: FilterComponentProps) => {
  const [isActive, setIsActive] = React.useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
    onclick && onclick();
  };
  return (
    <TouchableOpacity
      className={`border-2 border-primary rounded-full px-4 py-[20px] mr-2  ${
        isActive ? "bg-primary" : "bg-white"
      }`}
      onPress={handleClick}
    >
      <Text className={`${isActive ? "text-white" : "text-primary"}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};


const DoctorDisplayCard = (data :Doctor) => {
    const [clicked, setClicked] = useState(false);
    return (
      <TouchableOpacity
        className="my-4  flex-row items-center border border-gray-200 justify-center w-[90%] rounded-lg mx-auto"
      >
        <View className="">
          <Image
            source={require("@/assets/images/doctor2.png")}
            className="w-full h-full "
            style={{ width: 100, height: 90 }}
            borderBottomLeftRadius={4}
            borderTopLeftRadius={4}
          />
        </View>
        <View className="flex flex-row px-3 flex-1 h-full items-center ">
          <View className="flex-1 h-full ">
            <Text className="text-lg font-semibold my-2 mt-1">{data.name}</Text>
            <View className="flex-row items-center my-[10px] mb-1 mt-1">
              <FontAwesome
                name="star-half-empty"
                size={10}
                color="#0086AD"
              />
              <Text className="text-xs ml-2">
                {data.rating} ({data.reviews}reviews)
              </Text>
            </View>
            <Text className="text-xs">
              {data.specialization.name} specialist
            </Text>
            <Text className="text-xs">{data.workplace.name}</Text>
          </View>
          <View>
            <TouchableOpacity
              className="items-center flex-row  justify-center  p-1  bg-primary/10 rounded-lg"
              style={{ width: 35, height: 30 }}
              onPress={() => setClicked(!clicked)}
            >
              {clicked ? (
                  <FontAwesome name="heart" size={18} color="#0086AD" />
              ) : (
                  <FontAwesome name="heart-o" size={18} color="#0086AD" />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
}

export default DoctorsDisplayView;
