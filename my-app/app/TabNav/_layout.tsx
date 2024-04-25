import { Link, Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useColor } from "@temas/temas";
import React from "react";
import {MaterialIcons} from '@expo/vector-icons';

export default function layout() {
    const cores = useColor()

    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: cores.bgPrimary },
            tabBarIcon: ({color, size}) => (
                <MaterialIcons name="camera-alt" size={size} color={color} />
            ),
        }}>
        <Tabs.Screen name="Scanner"
            options={{
                headerRight: () => <Ionicons name="refresh" size={24} color={'white'} style={{ padding: 10 }} />,
                headerTitle: "Scanner",
                tabBarStyle:{
                    backgroundColor: 'red',
                },
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: cores.bgSecundary },
            }}
        />

            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'red',
                },
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="format-list-numbered" size={size} color={color}/>
                ),
                tabBarInactiveTintColor: "#fff",
            }} />

        </Tabs>
    )
}
