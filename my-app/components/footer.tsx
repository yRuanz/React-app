import React from "react";
import { View, TextInput, TextInputProps, Text, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo, AntDesign,FontAwesome6,FontAwesome } from '@expo/vector-icons';

interface InputProps extends TextInputProps{
  title: string
}

const Rodape = () => {
  return (
    <View style={styles.display}>
        <View style={styles.footer}>
            <Text><FontAwesome6 name="camera-rotate" size={30} color="black" /></Text><Text><FontAwesome name="list-ol" size={30} color="black" /></Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    marginHorizontal: 15
},
  footer:{
    position:'absolute',
    height:60,
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:20,
    backgroundColor:'#ffff',
    top:750,
},
display:{
    borderBottomColor:'#F5F5F5',
    borderBottomWidth:2,
},
    });
export default Rodape;