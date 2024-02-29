import React from "react";
import { View, TextInput, StyleSheet, Text } from 'react-native';

const Input = ({title, placeholder} : {title:string, placeholder:string}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textoinp}>{title}</Text>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#808080"/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        marginLeft:30,
    },
    input: {
        height: 40,
        width: 350,
        backgroundColor: '#dcdcdc',
        borderRadius: 5,
        padding: 10,
        marginBottom:15,
    },
    textoinp: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        margin: 5,
    },
});

export default Input;