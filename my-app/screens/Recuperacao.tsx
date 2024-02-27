import React from "react";
import { View,StyleSheet, Text, TextInput,TouchableOpacity} from "react-native";
import Botao from "../components/Button";
import Status from "../components/StatusBar";
import Input from "../components/input";

const Recuperacao = () => {
    return (
     
    <View style={styles.container}>
        <Status title='Recuperação de Senha'/>
        <View style={styles.menuRecup}>
            <Text style={styles.menuRecup}>Insira seu e-mail para recuperar a senha!</Text>
            <Input title={"Email"} placeholder={"Insira seu email"} />
            <Botao />
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
    },

    menuRecup: {
        flex: 1,
        backgroundColor: '#ffff',
        paddingTop:20,
        textAlign: 'center',
        fontWeight:'bold',
    },

    input:{
        margin: 15,
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
        color: '#575757',
      },
});

export default Recuperacao;