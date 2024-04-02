import React from "react";
import { View,StyleSheet, Text, TextInput,TouchableOpacity} from "react-native";
import Botao from "../../../components/Button";
import Status from "../../../components/StatusBar";
import Inputs from "../../../components/Input";
import { Link } from "expo-router";

const Recuperacao = () => {
    const BotaoPress =() => (
            alert("E-mail enviado com sucesso! Aguarde para a recuperação da senha!")
    )
    return (
     
    <View style={styles.container}>
        <Status title='Recuperação de Senha'/>
        <View style={styles.menuRecup}>
            <Text style={styles.slogan}>Insira seu e-mail para recuperar a senha!</Text>
            <Inputs Label={"Email:"} placeholder={"Insira seu email"}/>
            <Link href="/index" asChild>
                <TouchableOpacity>
                    <Botao title="Acessar"/>                       
                </TouchableOpacity>
            </Link>
        </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex:1,
      backgroundColor: '#011E83',
    },

    titulo: {
        textAlign: 'center',
        color: 'white',
        fontSize:20,
        fontWeight:'bold',
    },

    menuRecup: {
        backgroundColor: '#ffff',
        paddingTop:20,
        fontWeight:'bold',
        paddingBottom:320,
    },

    slogan:{
        marginTop:15,
        textAlign: 'center',
        paddingVertical:20,
        fontSize:19,
    }
});

export default Recuperacao;