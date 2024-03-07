import React from "react";
import { View,StyleSheet, Text, TextInput,TouchableOpacity} from "react-native";
import Botao from "../components/Button";
import Status from "../components/StatusBar";
import Inputs from "../components/Input";

const Login = () => {
    return (
     
    <View style={styles.container}>
        <View>
            <Status title="Login"/>
            <View style={styles.menuLogin}>
                <Text style={styles.slogan}>Faça login para acessar o sistema!</Text>
                <Inputs Label={"Email:"} placeholder={"Insira seu email:"}/>
                <Inputs Label={"Senha:"} placeholder={"Insira sua senha:"} secureTextEntry/>
                <Botao title="Cadastre-se"/>
                <View style={styles.linkText}>
                    <Text style={{color:'blue'}}>Cadastre-se</Text><Text style={{color:'blue'}}>Esqueceu a senha?</Text>
                </View>
            </View>
        </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000000',
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