import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

type Props = {
  title: string;
};

export default function Status ({ title }: Props){
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 60,
    },
    image: {
      width:200,
      height:51
    },
    texto: {
      color: 'white',
      fontSize: 20,
      padding: 5,
    },
  });
  
  return (
    <View style={styles.container}>
      <Image source={require('@assets/senailogo.png')} style={styles.image} />
      <StatusBar style="light" backgroundColor="#333" />
      <Text style={styles.texto}>{title}</Text>
    </View>
  );
};


