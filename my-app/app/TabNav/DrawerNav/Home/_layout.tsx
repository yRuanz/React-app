import { DrawerToggleButton } from "@react-navigation/drawer";
import { Link, Stack } from "expo-router";
import { useColor } from "@temas/temas";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function layout() {
    const cores = useColor();
    return (
        <Stack>
            <Stack.Screen
                name="inventario"
                options={{
                    headerLeft: () => <DrawerToggleButton />,
                    headerSearchBarOptions: { placeholder: "Pesquisar" },
                    headerStyle: { backgroundColor: cores.bgPatrimonio },
                    headerTitleAlign: 'center',
                    headerTintColor: cores.textColorSecundary
                }}
            />

            {/* Esta e a Tela de Descrição */}
            <Stack.Screen name="descItens" options={{
                headerRight: () => (
                <TouchableOpacity>
                        <Ionicons name="reload" size={24} color='white' />
                </TouchableOpacity>
                ),
                headerTitle: "Descrição de item",
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: cores.bgPatrimonio },
                headerTitleAlign: 'center'
            }}/>
            {/* Esta e a Tela de Lista */}
            <Stack.Screen name="AddItens" options={{
                headerRight: () => (
                <TouchableOpacity>
                    <Link href="/TabNav/DrawerNav/Home/Editar" asChild>
                        <Ionicons name="add-circle-outline" size={24} color='white' />
                    </Link>
                </TouchableOpacity>
                ),
                headerTitle: "Cadastro de itens",
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: cores.bgPatrimonio },
                headerTitleAlign: 'center'
            }}/>

            <Stack.Screen name="Editar" options={{
                headerRight: () => (
                <TouchableOpacity>
                    <Link href="/TabNav/DrawerNav/Home/inventario" asChild>
                        <Ionicons name="checkmark-circle" size={24} color='white' />
                    </Link>
                </TouchableOpacity>
                ),
                headerTitle: "Cadastro de itens",
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: cores.bgPatrimonio },
                headerTitleAlign: 'center'
            }}/>
        </Stack>
    )
}