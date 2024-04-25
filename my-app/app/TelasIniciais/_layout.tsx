import { Stack } from "expo-router";
import { useColor } from "@temas/temas";
import React from "react";
import { Ionicons } from "@expo/vector-icons";


export default function layout() {
  const cores = useColor();
  return (
    <Stack>

      <Stack.Screen name="" options={{
        headerShown: false,
        statusBarColor: cores.bgQuaternary }} />
      
      <Stack.Screen name="Recuperacao" options={{
        headerTitle: "" ,
        statusBarColor: cores.bgTertiary,
        headerTintColor: cores.textColorPrimary, 
        headerTransparent: true }} />

      <Stack.Screen name="Cadastro" options={{
        headerTitle: "" , 
        statusBarColor: cores.bgSecundary,
        headerTintColor: cores.textColorPrimary,
        headerTransparent: true }} />

    <Stack.Screen name="Login" options={{
        headerTitle: "" , 
        statusBarColor: cores.bgQuaternary,
        headerTintColor: cores.textColorPrimary,
        headerTransparent: true }} />

    </Stack>

    
    
  )
}
