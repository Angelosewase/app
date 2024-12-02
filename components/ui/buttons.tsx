import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export const FacebookButton = () => {
    return (
      <TouchableOpacity className="bg-white rounded-lg   flex flex-row items-center justify-center">
        <FontAwesome5 name="facebook-f" size={20} color="#3b5998" />
        <Text className="ml-2 text-lg font-bold">Facebook </Text>
      </TouchableOpacity>
    );
  };
  
  export const GoogleButton = () => {
    return (
      <TouchableOpacity className="bg-white rounded-lg  flex flex-row items-center justify-center p-4 ">
        <FontAwesome5 name="google" size={20} color="#DD4B39" />
        <Text className="ml-2 text-lg font-bold my-4">Google</Text>
      </TouchableOpacity>
    );
  };


