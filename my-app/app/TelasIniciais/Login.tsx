import React from "react";
import { View,StyleSheet, Text, TextInput,TouchableOpacity} from "react-native";
import Botao from "@comp/Button";
import Status from "@comp/StatusBar";
import Inputs from "@comp/Input";
import { Link } from "expo-router";
import {useColor} from "@temas/temas";
import LinkBtn from "@comp/LinkBtn";

const Login = () => {
    const cores = useColor();

    return (
     
        
            <View style={styles.container}>
                <Status title="Login"/>
                <View style={styles.menuLogin}>
                    <Text style={styles.slogan}>Faça login para acessar o sistema!</Text>
                    <Inputs Label={"Email:"} placeholder={"Insira seu email:"}/>
                    <Inputs Label={"Senha:"} placeholder={"Insira sua senha:"} secureTextEntry/>
                    <Link href="/TabNav/DrawerNav/Home/inventario" asChild>
                        <TouchableOpacity>
                            <LinkBtn title="Entrar" href="TabNav"/>                        
                        </TouchableOpacity>
                    </Link>
                    <View style={styles.linkText}>
                    <Link href="/TelasIniciais/Cadastro" style={{ color: cores.bginfo}} asChild>
                        <TouchableOpacity>
                            <Text style={{color: "blue"}}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </Link>
                    <Link href="/TelasIniciais/Recuperacao" style={{ color: cores.bginfo}} asChild>
                        <TouchableOpacity>
                            <Text style={{color: "blue"}}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>
                    </Link>
                    </View>
                </View>
            </View>
   
        );
    }

  const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000000',
        height:'100%',
        },

    menuLogin:{
        backgroundColor:'#ffff',
        height: '100%',
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