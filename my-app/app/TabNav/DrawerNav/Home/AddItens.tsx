import React from "react";
import { View,StyleSheet,Text, ScrollView } from "react-native";
import Cabecalho from "@comp/header";
import Rodape from "@comp/footer";
import { StatusBar } from "expo-status-bar";
import InputLabel from "@comp/InputLabel";
import { useColor } from "@temas/temas";


const AdicionarItens = () => {
    return(
        <View style={styles.container}>
            <View>
                <InputLabel label={"N° Inventário"} />
                <InputLabel label="Descrição" />
                <InputLabel label="Local" /> 
                <InputLabel label="Responsável" /> 
                <InputLabel label="Data de Registro" /> 
            </View>
        </View>
    )
}

const cores = useColor()
const styles = StyleSheet.create({
    container:{
    },

    navbar:{
        height:110,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
    },

    footer:{
        top:210,
        bottom:0
        
    }
    
})

export default AdicionarItens