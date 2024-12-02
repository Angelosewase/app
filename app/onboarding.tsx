import {  useRouter } from "expo-router";
import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Thousands of doctors",
    description: "Get more than thousand doctors on instahealth",
    image: require("../assets/images/doctor1.png"),
  },
  {
    title: "Chat with doctors",
    description: "Chat with more than thousand doctors on instahealth",
    image: require("../assets/images/doctor2.png"),
  },
  {
    title: "Live Talk with doctors",
    description: "Talk with more than thousand doctors on instahealth",
    image: require("../assets/images/doctor.png"),
  },
];

const OnboardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router  = useRouter();

  const handleTabClick = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const renderContent = () => {
    const { title, description } = slides[currentSlide];
    const isLastSlide = currentSlide === slides.length - 1;


    return (
      <View className="flex-1 items-center pt-4">
        <Text className="text-lg font-bold text-center text-blue-500 mb-1">
          {title}
        </Text>
        <Text className="text-base text-gray-600 text-center my-2 max-w-[75%]">
          {description}
        </Text>
        <View className="flex-row  w-full mt-4  ">
          {slides.map((_, index) => (
            <View
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentSlide ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </View>
        <View className="flex-row justify-between w-full mt-auto mb-4">
          <Text
            onPress={() => {
              router.navigate("/auth");
            }}
            className="text-blue-500"
          >
            Skip
          </Text>
          <TouchableOpacity
            onPress={() => {
              if (isLastSlide) {
                router.navigate("/auth");
              } else {
                handleTabClick(currentSlide + 1);
              }
            }}
            className="bg-blue-500 rounded py-2 px-4"
          >
            <Text className="text-white">{isLastSlide ? "Done" : "Next"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View className="flex-1 relative">
      <ImageBackground
        source={slides[currentSlide].image}
        className="h-[63%] justify-center items-center"
        resizeMode="stretch"
        imageClassName="w-full"

      />
      <View
        className="h-[40%]   bg-white bg-opacity-80 rounded-lg pb-5 px-5 pt-3 w-full absolute bottom-0 items-center "
        style={styles.bottomSheet}
      >
        <View className=" items-center justify-center">
          <View className="w-16 h-1 rounded-lg bg-gray-200 " />
        </View>
        {renderContent()}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  bottomSheet: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

export default OnboardingScreen;
