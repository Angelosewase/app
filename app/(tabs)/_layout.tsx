import { View, Text, StyleSheet } from "react-native";
import React, { Children } from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

interface tabComponentProps {
  children: React.ReactNode;
  name: string;
  focused?: boolean;
  color?: string;
  size?: number;
}
const TabComponent = ({
  children,
  focused,
  color,
  name,
}: tabComponentProps) => {
  return (
    <View className="items-center flex-row  justify-evenly  p-1  bg-primary/10 rounded-xl" style ={{width:focused ? 90:40 , alignSelf:'center', height:30 }}>
      <View >
      {children}

      </View>
      {focused && (
        <Text className="text-xs font-semibold text-nowrap" style={{ color: color}   }>
          {name}
        </Text>
      )}
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0086AD",
        tabBarInactiveTintColor: "#0086AD",
        tabBarStyle: { ...styles.tabBar },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      
        
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <TabComponent
              color={color}
              focused={focused}
              name="home"
              size={size}
            >
              <Entypo name="home" size={20} color={color} />
            </TabComponent>
          ),
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <TabComponent name="appointment" focused={focused} color={color}>
              <Feather name="calendar" size={20} color={color} />
            </TabComponent>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabComponent name="history" color={color} focused={focused}>
              <Entypo name="list" size={20} color={color} />
            </TabComponent>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabComponent name="profile" focused={focused} color={color}>
              <Entypo name="user" size={20} color={color} />
            </TabComponent>
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    justifyContent:'center',
    paddingHorizontal:35,
    alignContent:"center",
    
  },
});
