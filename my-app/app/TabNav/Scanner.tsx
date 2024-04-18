import React from "react";
import { View,StyleSheet,Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Cabecalho from "@comp/header";
import Rodape from "@comp/footer";
import {MaterialIcons} from '@expo/vector-icons'


const Scanner = () => {
    return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <Cabecalho title="Scanner" />
            </View>
            <View>

            </View>
            <View style={styles.footer}>
                <Rodape backgroundColor={"white"} iconColor={"black"} border={false} />
            </View>
            <View style={styles.corpo}>
                <MaterialIcons name="qr-code-scanner" size={250} color="#5D5C5C" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },

    navbar:{

    },
    
    footer:{

    },
    corpo:{
        alignItems: "center",
        paddingTop: 150,
    }
})
export default Scanner