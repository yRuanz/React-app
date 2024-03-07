import React from "react";
import { View, TextInput, TextInputProps, Text, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo, AntDesign,FontAwesome6,FontAwesome } from '@expo/vector-icons';
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

interface InputProps extends TextInputProps{
  title: string
}

const Cabecalho = ({ title, ...props}: InputProps) => {
  return (
    <View style={styles.navbar}>
      <Text><AntDesign name="arrowleft" size={30} color="white" /></Text><Text style={styles.texto}>{title}</Text><Text><AntDesign name="pluscircleo" size={30} color="white" /></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginHorizontal: 15,
  },
  navbar: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor:'#ff0000',
    paddingHorizontal: 15,
  },
  texto: {
    color:'white'
  }
});

export default Cabecalho;