import React from "react";
import { View,StyleSheet, Text, TextInput,TouchableOpacity} from "react-native";
import Botao from "@comp/Button";
import Status from "@comp/StatusBar";
import Inputs from "@comp/Input";
import { Link } from "expo-router";

const Login = () => {
    return (
     
    <View style={styles.container}>
        <View>
            <Status title="Login"/>
            <View style={styles.menuLogin}>
                <Text style={styles.slogan}>Faça login para acessar o sistema!</Text>
                <Inputs Label={"Email:"} placeholder={"Insira seu email:"}/>
                <Inputs Label={"Senha:"} placeholder={"Insira sua senha:"} secureTextEntry/>
                <Link href="/inventario" asChild>
                    <TouchableOpacity>
                        <Botao title="Entrar"/>                        
                    </TouchableOpacity>
                </Link>
                <View style={styles.linkText}>
                <Link href="/Cadastro" asChild>
                    <TouchableOpacity>
                        <Text style={{color: "blue"}}>Cadastre-se</Text>
                    </TouchableOpacity>
                </Link>
                <Link href="/Recuperacao" asChild>
                    <TouchableOpacity>
                        <Text style={{color: "blue"}}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </Link>
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