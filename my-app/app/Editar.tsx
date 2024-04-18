import React from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import PatriBar from "@comp/inventarioBar";
import {AntDesign, MaterialIcons } from '@expo/vector-icons';
import Rodape from "@comp/footer";
import InputLabel from "@comp/InputLabel";
import { Link } from "expo-router";

const Editar = () => {
    return(
        <View style={styles.container}>

            <PatriBar color="red">
                <TouchableOpacity>
                    <Link href="/DescricaoIten" asChild>
                        <AntDesign name="arrowleft" size={25} color="#ffff" />
                    </Link>
                </TouchableOpacity>
                    <Text style={styles.text}>Editar</Text>
                <TouchableOpacity>
                    <MaterialIcons name="check-circle" size={25} color="#ffff" />
                </TouchableOpacity>
            </PatriBar>

            <View style={styles.inputContainer}>

            <InputLabel label="N° Inventario" placeholder="957689"/>

            <InputLabel label="Descrição" placeholder="CADEIRA GIRATÓRIA"/>

            <InputLabel label="Local" placeholder="SALA C13"/>

            <InputLabel label="Responsável" placeholder="CARLOS"/>

            <InputLabel label="Data de registro" placeholder="05/03/2024"/>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "#ffff",
        fontSize: 16,
    },
    inputContainer: {
        flex: 1,
        marginTop: 50,

    },
});

export default Editar;