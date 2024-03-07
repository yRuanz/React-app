import React from "react";
import { View,StyleSheet, Text, TextInput,TouchableOpacity} from "react-native";
import Botao from "../components/Button";
import Status from "../components/StatusBar";
import Inputs from "../components/Input";

const Login = () => {
    return (
     
    <View style={styles.container}>
        <View>
            <Status title="Cadastre-se"/>
            <View style={styles.menuLogin}>
                <Inputs title={"Nome:"} placeholder={"Insira seu nome:"}/>
                <Inputs title={"Sobrenome:"} placeholder={"Insira seu sobrenome:"}/>
                <Inputs title={"Email:"} placeholder={"Insira seu email:"}/>
                <Inputs title={"Telefone:"} placeholder={"Insira seu telefone:"}/>
                <Inputs title={"Senha:"} placeholder={"Insira seu Senha:"} secureTextEntry/>
                <Inputs title={"Confirmar senha:"} placeholder={"Confirme sua senha:"} secureTextEntry/>
                <Botao title="Cadastre-se"/>
            </View>
        </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        backgroundColor: '#ff0000',
        },

    menuLogin:{
        backgroundColor:'#ffff',
        paddingVertical:10,
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
    }

})

  export default Login