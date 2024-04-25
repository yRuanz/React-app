import { View,StyleSheet,Text } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { useColor } from "@temas/temas";

type Props ={
    id: string,
    item: string,
};

const Itens = ({id,item  } :{id:string, item:string}) => {
    return(
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.idchair}>{id}</Text>
                <Text style={styles.texto2}>{item}</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:60,
        paddingLeft:15,
        paddingVertical:10,
    },

    display:{
        borderBottomColor:'#F5F5F5',
        borderBottomWidth:2,
    },

    idchair:{
        fontWeight:'bold',
    },

    texto2:{
        marginBottom:20,
        color:'gray'
    }

})

export default Itens