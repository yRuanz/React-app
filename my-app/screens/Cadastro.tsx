import React from "react";
import { View,StyleSheet, Text, TextInput,TouchableOpacity} from "react-native";
import Botao from "../components/Button";
import Status from "../components/StatusBar";
import Input from "../components/Input";

const Login = () => {
    return (
     
    <View style={styles.container}>
        <View>
            <Status title="Cadastre-se"/>
            <View style={styles.menuLogin}>
                <Input title={"Nome:"} placeholder={"Insira seu nome:"}/>
                <Input title={"Sobrenome:"} placeholder={"Insira seu sobrenome:"}/>
                <Input title={"Email:"} placeholder={"Insira seu email:"}/>
                <Input title={"Telefone:"} placeholder={"Insira seu telefone:"}/>
                <Input title={"Senha:"} placeholder={"Insira seu Senha:"}/>
                <Input title={"Confirmar senha:"} placeholder={"Confirme sua senha:"}/>
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