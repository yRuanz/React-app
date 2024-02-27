import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Botao = () => {
    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
  
    button: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      marginHorizontal:20,
    },
  
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });

export default Botao;