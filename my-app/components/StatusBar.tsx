import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Status =  ({ title } : {title: string}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Image source={require('../assets/senailogo.png')} style={styles.logo}/>
      <Text style={styles.texto}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    padding:60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    width:200,
    height:51,
  },

  texto:{
    color: 'white',
    fontSize:20,
    padding:5,
  }

});

export default Status;