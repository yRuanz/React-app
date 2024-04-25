import React from "react";
import { View,StyleSheet,Text, ScrollView,TouchableOpacity} from "react-native";
import Itens from "@comp/item"; 
import { Entypo, AntDesign,FontAwesome6,FontAwesome} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { useColor } from "@temas/temas";

const Inventario = () => {
    const cores = useColor();
    return(
        <View style={styles.container}>
            <StatusBar style="dark"/>
            <View style={styles.navbar}>
            </View>
            <View>
                <ScrollView>
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                    <Itens id="956389" item="CADEIRA SENAI" />
                </ScrollView>
                <Link href="TabNav/DrawerNav/Home/AddItens" asChild>
                    <TouchableOpacity style={styles.add}>
                        <AntDesign name="pluscircle" size={50} color="#FF0000" />
                    </TouchableOpacity>
                </Link>

            </View>
            <View style={styles.footer}>
            <Link href="/Scanner" asChild>
                <TouchableOpacity>
                    <Text><FontAwesome6 name="camera-rotate" size={30} color="white" /></Text><Text><FontAwesome name="list-ol" size={30} color="white" /></Text>
                </TouchableOpacity>            
            </Link> 
            </View>                 
                
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    },

    navbar:{
        width:'100%',
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
        gap:20,
        backgroundColor:'#ff0000',
        top:715,
    },
    
    add:{
        position: "absolute",
        bottom: 20,
        right: 0,
        margin: 20,
        marginBottom: 50,
        height: 70,

        
    }

})

export default Inventario