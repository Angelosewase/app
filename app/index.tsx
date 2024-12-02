import { useNavigation, useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function Index() {
const router = useRouter()
  setTimeout(() => router.navigate("/onboarding"), 3000);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        source={require("../assets/images/splash.png")}
        className="w-20  h-20 "
      />
      <Text className="mt-4  mb-10 text-2xl color-[#0086AD]">Insta Health</Text>
      <ActivityIndicator animating={true}  color={MD2Colors.blue400} className="w-full" />
    </View>
  );
}
