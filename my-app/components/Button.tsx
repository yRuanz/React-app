import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Botao = ({title} : {title:string}) => {

    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
  
    button: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      marginHorizontal:15,
    },
  
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });

export default Botao;