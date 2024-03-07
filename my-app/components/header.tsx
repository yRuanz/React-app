import React from "react";
import { View, TextInput, TextInputProps, Text, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo, AntDesign,FontAwesome6,FontAwesome } from '@expo/vector-icons';

interface InputProps extends TextInputProps{
  title: string
}

const Cabecalho = ({ title, ...props}: InputProps) => {
  return (
    <View style={styles.navbar}>
      <Text><Entypo name="menu" size={30} color="black" /></Text><Text>{title}</Text><Text><AntDesign name="search1" size={30} color="black" /></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginHorizontal: 15
  },
  navbar: {
    height: 110,
    width: '100%',
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#ff0000',
    paddingHorizontal: 15,
  },
});

export default Cabecalho;