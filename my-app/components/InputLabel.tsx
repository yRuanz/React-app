import React from 'react';
import { View, StyleSheet, Text, TextInput, TextInputProps } from 'react-native';
import { useState } from 'react';

interface InputLabelProps extends TextInputProps {
    label: string;
}

function InputLabel({ label, ...props }: InputLabelProps) {
    const [hover, setHover] = useState("#5D5C5C");
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        formContainer: {
            paddingHorizontal: 20,
            marginTop: 35,

        },
        inputContainer: {
            position: 'relative',
        },
        label: {
            position: 'absolute',
            backgroundColor: '#f2f2f2',
            color: hover,
            paddingHorizontal: 8,
            top: -8,
            left: 12,
            zIndex: 1,
            fontSize: 12,
            maxWidth: 110,

        },
        input: {
            height: 47,
            borderRadius: 5,
            borderColor: hover,
            borderWidth: 1,
            paddingLeft: 35,
        },

        text: {
            color: 'red',
        }
    });

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{label}<Text style={styles.text}> *</Text></Text>
                <TextInput
                    {...props}
                    onFocus={() => {
                        setHover("#F39200")
                    }}
                    onBlur={() => {
                        setHover("#5D5C5C")
                    }}
                    style={styles.input}
                />
            </View>
        </View>
    );
}

export default InputLabel;