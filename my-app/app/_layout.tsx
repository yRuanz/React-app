import { Stack } from "expo-router";
import { useColor } from "@temas/temas";
import React from "react";
import { Ionicons } from "@expo/vector-icons";


export default function layout() {
  const cores = useColor();
  return (
    <Stack>

      <Stack.Screen name="TabNav/DrawerNav/inventario" options={{
        headerShown: false,
        statusBarColor: cores.bgQuaternary }} />
      
      <Stack.Screen name="TelasIniciais/Recuperacao" options={{
        headerTitle: "" ,
        statusBarColor: cores.bgTertiary,
        headerTintColor: cores.textColorPrimary, 
        headerTransparent: true }} />

      <Stack.Screen name="TelasIniciais/Cadastro" options={{
        headerTitle: "" , 
        statusBarColor: cores.bgSecundary,
        headerTintColor: cores.textColorPrimary,
        headerTransparent: true }} />

    <Stack.Screen name="TelasIniciais/Login" options={{
        headerTitle: "" , 
        statusBarColor: cores.bgQuaternary,
        headerTintColor: cores.textColorPrimary,
        headerTransparent: true }} />

    </Stack>

    
    
  )
}
