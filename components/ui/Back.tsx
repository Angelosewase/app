import { useNavigation } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export const Back = ({label}:{label?:string}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        className="flex-row items-center gap-1 pt-2 "
        onPress={() => navigation.goBack()}
      >
        <Entypo name="chevron-left" size={24} color="black" />
        <Text className="text-xl ml-8 font-semibold capitalize">{label}</Text>
      </TouchableOpacity>
    </>
  );
};
