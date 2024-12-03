import { useNavigation } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export const Back = ({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        className={`flex-row items-center gap-1 pt-2 ${className}`}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="chevron-left" size={24} color="#0086AD" />
        <Text className="text-xl ml-8 font-semibold capitalize">{label}</Text>
      </TouchableOpacity>
    </>
  );
};
