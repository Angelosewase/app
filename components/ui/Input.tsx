import React, { forwardRef } from "react";
import { Text, TextInput, TextStyle, View, ViewStyle } from "react-native";

interface InputProps extends React.ComponentProps<typeof TextInput> {
  placeholder?: string;
  value?: string ;
  onChangeText?: (text: string) => void;
  style?: ViewStyle & TextStyle;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  placeholderTextColor?: string;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
  maxLength?: number;
  multiline?: boolean;
  className?: string;
  label?: string;
}

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  return (
    <TextInput
      ref={ref}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      style={[props.style, props.inputStyle]}
      placeholderTextColor={props.placeholderTextColor}
      keyboardType={props.keyboardType}
      autoCapitalize={props.autoCapitalize}
      autoCorrect={props.autoCorrect}
      secureTextEntry={props.secureTextEntry}
      maxLength={props.maxLength}
      multiline={props.multiline}
      className={`border border-gray-200 rounded-lg flex-row justify-between px-4 p-2 items-center my-2 bg-white shadow ${props.className}`}
      {...props}
    />
  );
});


export const InputWithLabel = ({ label, ...props }: InputProps) => {
  return (
    <View className="justify-between items-start my-2 w-[90%]">
      <Text className="text-base text-gray-500 text-start ">{label}</Text>
      <Input {...props} />
    </View>
  );
}

export default Input;
