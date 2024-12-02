import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const PasswordInput = ({ placeholder }: { placeholder: string }) => {
  const [password, setPassword] = useState<string>("");
  const [hiddenPassword, setHiddenPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  function changeIntoStars(password: string): void {
    let hiddenPassword = "";
    for (let index = 0; index < password.length; index++) {
      hiddenPassword += "*";
    }
    setHiddenPassword(hiddenPassword);
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    changeIntoStars(value);
  };

  return (
    <View className="border-2 border-gray-200 rounded-lg flex-row justify-between   items-center my-2 bg-white  p-3">
      <TextInput
        className="placeholder:text-lg"
        placeholder={placeholder}
        keyboardType="default"
        value={showPassword ? password : hiddenPassword}
        onChangeText={(value) => handlePasswordChange(value)}
        secureTextEntry={!showPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        {showPassword ? (
          <AntDesign name="eye" size={20} color="black" />
        ) : (
          <Feather name="eye-off" size={20} color="black" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
