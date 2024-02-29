import React from "react";
import { View,StyleSheet,Text, ScrollView } from "react-native";
import Itens from "../components/item"; 
import { Entypo, AntDesign,FontAwesome6,FontAwesome } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";

const Inventario = () => {
    return(
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <View style={styles.navbar}>
                <Text><Entypo name="menu" size={30} color="black" /></Text><Text><AntDesign name="search1" size={30} color="black" /></Text>
            </View>
            <View style={styles.itens}>
                <ScrollView>
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                    <Itens id="956389" item="CADEIRA SENAS" />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <Text><FontAwesome6 name="camera-rotate" size={30} color="white" /></Text><Text><FontAwesome name="list-ol" size={30} color="white" /></Text>
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },

    navbar:{
        height:110,
        width:'100%',
        paddingTop:40,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:15,
    },

    footer:{
        position:'absolute',
        height:60,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ff0000',
        top:820,
    },

    itens:{
        alignItems:'flex-start'
    }

})

export default Inventario