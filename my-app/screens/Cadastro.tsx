import React from "react";
import { View,StyleSheet, Text } from "react-native";
import Status from "../components/StatusBar";
import { AntDesign } from '@expo/vector-icons';

const Cadastro = () => {
    return (
      <View style={styles.container}>
        <Status /> 
        <Text style={styles.slogan}><AntDesign name="loading1" size={30} color="white"/></Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff0000',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:300,

    },
    slogan: {
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:400,
    }

  });
  
  export default Cadastro;