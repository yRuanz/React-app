import React from "react";
import { View,StyleSheet, Text, TextInput,TouchableOpacity,TouchableOpacityProps, ScrollView} from "react-native";
import Status from "@comp/StatusBar";
import Inputs from "@comp/Input";
import { Link } from "expo-router";
import { useColor } from "@temas/temas";
import LinkBtn from "@comp/LinkBtn";

const Cadastro = () => {
    const cores = useColor();

    return (
     
    <View style={styles.container}>
        <Status title='Cadastre-se'/>
        <ScrollView contentContainerStyle={styles.cadastro}>            
            <View style={styles.menuLogin}>
                <Inputs Label={"Nome:"} placeholder={"Insira seu nome:"}/>
                <Inputs Label={"Sobrenome:"} placeholder={"Insira seu sobrenome:"}/>
                <Inputs Label={"Email:"} placeholder={"Insira seu email:"}/>
                <Inputs Label={"Telefone:"} placeholder={"Insira seu telefone:"}/>
                <Inputs Label={"Senha:"} placeholder={"Insira seu Senha:"} secureTextEntry/>
                <Inputs Label={"Confirmar senha:"} placeholder={"Confirme sua senha:"} secureTextEntry/>
                    <LinkBtn title="Cadastre-se" href="TelasIniciais/Login"/>   
            </View>
        </ScrollView>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ff0000',
        height:'100%',
        },

    menuLogin:{
        backgroundColor:'#ffff',
        paddingBottom:20
    },

    slogan:{
        paddingVertical:20,
        fontSize:19,
        textAlign:'center'
    }, 

    linkText:{
        color:'blue',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:10,
        paddingHorizontal:27,
    },

    cadastro:{
        flexGrow:1,
    }
})

  export default Cadastro