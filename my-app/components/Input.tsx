import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps{
    Label: string
}

export default function Inputs({Label, ...props}:InputProps){
    const [hover,setHover] = useState('#f5f5f5')
    const styles = StyleSheet.create({
        container: {
          margin: 18,
        },
        label: {
            marginVertical:13,
            marginLeft:15,
            fontSize: 14

        },
        input: {
          padding: 10,
          borderRadius: 5,
          marginTop: 5,
          backgroundColor: '#F5F5F5',
          borderWidth: 1,
          borderColor: hover,
          marginHorizontal:15
        },
      });

    return(
        <>
            <Text style ={styles.label}>{Label}</Text>
            <TextInput {...props}
                style={styles.input} onFocus={() =>{
                    setHover('#f39200')
                }}onBlur={() =>{
                    setHover('f5f5f5')
                }} />
        </>
    )
}