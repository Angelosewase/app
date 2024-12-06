import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Back } from "@/components/ui/Back";
import {
  notificationsData,
  specializationColors,
} from "@/data/placeholderData";
// import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";

const generalIcons = [
  "exclamation",
  "exclamation-circle",
  "checkmark-circle",
  "checkmark-circle-outline",
  "information-circle",
  "information-circle-outline",
  "warning",
  "warning-outline",
  "alert-circle",
  "alert-circle-outline",
  "alert-triangle",
  "alert-triangle-outline",
] as const;

const Notifications = () => {
  const [notificationState] = useState(notificationsData);
  return (
    <View className="flex-1 bg-white pt-4 px-2">
      <Back label="Notifications" className="text-xl" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="w-[95%] mx-auto"
      >
        <DateBreaker dateString="Today , march 2024" />
        {notificationState.map((data, idx) => (
          <NotificationDisplay
            description={data.description}
            title={data.title}
            key={idx}
          >
            <View
              style={{
                backgroundColor: specializationColors[idx],
              }}
              className=" rounded-full items-center justify-center  w-12 h-12"
            >
              <AntDesign name="checkcircle" size={24} color="white" />
            </View>
          </NotificationDisplay>
        ))}
      </ScrollView>
    </View>
  );
};

const DateBreaker = ({ dateString }: { dateString: string }) => {
  return (
    <View className="w-[90%] my-4 mx-auto ">
      <Text className="text-gray-500 text-sm">{dateString}</Text>
    </View>
  );
};

interface notificationProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const NotificationDisplay = ({
  children,
  title,
  description,
}: notificationProps) => {
  return (
    <View
      style={{ backgroundColor: "white" }}
      className="flex-row  w-full  my-2 p-2 py-3  rounded-lg  shadow-lg shadow-primary/30"
    >
      <View className="w-[20%] items-center justify-center">{children}</View>
      <View>
        <Text className="text-sm text-gray-800 font-semibold ">{title}</Text>
        <Text className="text-sm text-gray-500 text-wrap w-[75%]">
          {description}
        </Text>
      </View>
    </View>
  );
};

export default Notifications;
