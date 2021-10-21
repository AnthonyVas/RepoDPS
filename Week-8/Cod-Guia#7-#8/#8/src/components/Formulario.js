import React,{useState} from 'react';
import { Text, TextInput, View, StyleSheet, TouchableWithooutFeedback, Animated } from 'react-native';
import {Picker} from '@react-native-community/picker';
import { useState } from 'react';

const Formulario=()=>{
    const [animacionboton] = useState(new Animated.Value(1));

    const animacionEntrada=()=>{
        Animated.spring(animacionboton,{
            toValue:.9
        }).start();
    }
    const animacionSalida=()=>{
        Animated.spring(animacionboton,{
            toValue:1
        }).start();
    }
    return(
        <>
        <View>
            <View>
                <Text style = {styles.input}>
                Pais
                </Text>
            </View>
            <View>
                <Picker style={styles.itempais}>
                    <Picker.Item label="--Seleccione un pais--" value="" />
                    <Picker.Item label="El Salvador" value="sv" />
                    <Picker.Item label="Costa Rica" value="cr" />
                    <Picker.Item label="Mexico" value="mx" />
                </Picker>
            </View>
            <TouchableWithooutFeedback>
                <View style={styles.btnBuscar}>
                    <Text style={styles.textoBuscar}>Buscar Pais</Text>
                </View>
            </TouchableWithooutFeedback>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    input:{
        padding:10,
        height:50, 
        fontSize: 20, 
        marginBottom:20, 
        textAlign: 'center',
        color: '#000'
    },
    itempais:{
        height: 60,
        backgroundColor: '#fff',
    },
    btnBuscar: {
        marginTop:50, 
        height: 50,
        backgroundColor: '#000',
        fontSize: 20,
        marginBottom:20,
        textAlign: 'center'
    },
    textoBuscar:{
        color:'#fff',
        fontWeight:'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: 18
    }
})

export default Formulario;