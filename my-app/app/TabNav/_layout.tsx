import { Link, Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function layout() {
    return (
        <Tabs screenOptions={{tabBarShowLabel: false,}} >
            <Tabs.Screen name="Scanner" options={{
                headerRight: () =>
                <Link href={"TabNav/Scanner"} asChild>
                    <Ionicons style={{paddingRight:10}} name="refresh" size={24} color={'white'} />
                </Link>,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'red',
                },
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="camera-flip" size={size} color={color}/>
                ),
            }} />

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
