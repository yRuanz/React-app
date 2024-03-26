import { Stack } from "expo-router/stack";

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitle:"",
            statusBarStyle:'light',
        }}>
            <Stack.Screen name="index"
            options={{
                statusBarColor: '#000000'
            }}/>
            <Stack.Screen
            name="Recuperacao"options={{
                statusBarColor: '#011E83'
            }}/>
            <Stack.Screen
            name="drawer"options={{
                headerShown: false
            }}/>
            <Stack.Screen
            name="Cadastro"options={{
                statusBarColor: '#FF0000'
            }}/>
            <Stack.Screen
            name="inventario"options={{
                statusBarColor: '#000000'
            }}/>
        </Stack>
            
    )
}