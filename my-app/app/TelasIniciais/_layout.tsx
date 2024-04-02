import { Stack } from "expo-router";

export default function layout() {
    return(    
    <Stack>
        <Stack.Screen name="index" options={{
            headerShown:false }} />
        <Stack.Screen name="TelasIniciais/Recuperacao" 
            options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: "#fff"
                }} />
        <Stack.Screen name="TelasIniciais/Cadastro" 
            options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: "#fff"
                }} />
    </Stack>
    )
}