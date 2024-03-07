import React from "react";
import { View,StyleSheet,Text, ScrollView } from "react-native";
import Cabecalho from "../components/header";
import Rodape from "../components/footer";
import { StatusBar } from "expo-status-bar";
import { AntDesign} from '@expo/vector-icons';

const AdicionarItens = () => {
    return(
        <View style={styles.container}>

            <View style={styles.navbar}>
                <Cabecalho title="Cadastro de Itens" />
            </View>
            <View>
                <Rodape />
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
        top:750,
    },

})

export default AdicionarItens