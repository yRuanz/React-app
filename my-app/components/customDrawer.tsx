import React from "react";
import { DrawerItemList } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import {useColor} from "@temas/temas"
import { Image } from "react-native";

export default function CustomDrawer(props: any){
    const cores = useColor();

    const styles = StyleSheet.create({
        box: {
            alignItems: 'center',
            padding: 20,
            height: 130,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'row',
        },
        infoUser: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 30,
            textAlign: 'center',
            color: 'gray',
        },
        nome: {
            fontSize: 18,
            fontWeight: 'bold',
            color: cores.textColorPrimaryVariant
        },
        email: {
            fontSize: 16,
            color: cores.textColorPrimaryVariant
        },
        container: {
            flex: 1
        }
    });

    return (
        <View style={[styles.container, {backgroundColor: cores.bgPrimary}]}>
            <View style={[styles.box, {backgroundColor: cores.bgPrimary}]}>
                <Image source={require('../assets/user.jpg')} style={{width: 80, height: 80, borderRadius: 70}}/>
                <View style={styles.infoUser}>
                    <Text style={styles.nome}>Flávio Josefo</Text>
                    <Text style={styles.email}>flavio@email.com</Text>
                </View>
            </View>
            <DrawerItemList {...props}/>
        </View>
    )
}