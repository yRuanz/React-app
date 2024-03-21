import React from "react";
import { View,StyleSheet,Text, ScrollView } from "react-native";
import Cabecalho from "../components/header";
import Rodape from "../components/footer";
import { StatusBar } from "expo-status-bar";
import InputLabel from "../components/InputLabel";


const AdicionarItens = () => {
    return(
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Cabecalho title="Cadastro de Itens" />
            </View>
            <View>
                <InputLabel text={"N° Inventário"} />
                <InputLabel text="Descrição" />
                <InputLabel text="Local" /> 
                <InputLabel text="Responsável" /> 
                <InputLabel text="Data de Registro" /> 
            </View>
            <View style={styles.footer}>
                <Rodape backgroundColor={"white"} iconColor={"black"} border={false} />
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
    },

    footer:{
        top:210,
        bottom:0
        
    }
    
})

export default AdicionarItens