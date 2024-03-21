import React from "react";
import { View,StyleSheet,Text, ScrollView } from "react-native";
import Cabecalho from "../components/header";
import Rodape from "../components/footer";
import { StatusBar } from "expo-status-bar";
import InputLabel from "../components/InputLabel";


const DescricaoItens = () => {
    return(
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Cabecalho title="Descrição dos Itens" />
            </View>
            <View>
                <Text style={styles.titulotexto}>N° do Inventário</Text>
                <Text style={styles.textodesc}>9483984</Text>
                <Text style={styles.titulotexto}>Descrição:</Text>

                <Text style={styles.titulotexto}>Local:</Text>

                <Text style={styles.titulotexto}>Responsável:</Text>

                <Text style={styles.titulotexto}>Data de Registro:</Text>

            </View>
            <View style={styles.footer}>
                <Rodape backgroundColor={"white"} iconColor={"black"} border={false} />
            </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:35
    },

    navbar:{
        height:110,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
    },

    titulotexto:{
        fontWeight:'bold',
        paddingLeft:30,
        paddingVertical:20,
    },

    textodesc:{
        color:'#808080',
        fontSize:14,
        paddingLeft:30
    },

    footer:{
        top:240,
        bottom:0
        
    }
    
})

export default DescricaoItens