import React from "react";
import { View,StyleSheet,Text, ScrollView,TouchableOpacity} from "react-native";
import Itens from "@comp/item"; 
import { Entypo, AntDesign,FontAwesome6,FontAwesome} from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

const Inventario = () => {
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
                <Link href="/AddItens" asChild>
                    <TouchableOpacity>
                        <AntDesign style={styles.add} name="pluscircle" size={50} color="red" />
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
        height:60,
        width:'100%',
        paddingTop:20,
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
        height: 215,

        
        
    }

})

export default Inventario