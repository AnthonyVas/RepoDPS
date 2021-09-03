import React from "react";
import { StyleSheet, TextInput, View } from "react-native";


export default function Form(props) {
    const { setName, setBruto } = props;

    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Ingrese su nombre"
                    keyboardType="string"
                    style={styles.input}
                    onChange={(e) => setName(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Ingrese salario mensual"
                    keyboardType="numeric"
                    style={[styles.input]}
                    onChange={(e) => setBruto(e.nativeEvent.text)}
                />
            </View>
            
        </View>
    );
}

const styles =StyleSheet.create({
    viewForm:{
        position:'absolute',
        bottom:0,
        width:'85%',
        paddingHorizontal:50,
        // backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius:30,
        height:180,
        justifyContent: "center",
    },
    viewInputs:{
        flexDirection:"column",
    },
    input:{
        height:50,
        backgroundColor: '#fff',
        borderWidth:1,
        // borderColor:colors.PRIMARY_COLOR,
        borderRadius:5,
        width:'100%',
        marginRight:5,
        marginLeft:-5,
        marginBottom: 10,
        color:'#000',
        paddingHorizontal:20,
    },
   
});

const picketSelectStyles = StyleSheet.create({
    inputIOS:{
        fontSize:16,
        paddingVertical:12,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:'grey',
        borderRadius:4,
        color:'black',
        paddingRight:30,
        backgroundColor:'#fff',
        marginLeft:-5,
        marginRight:-5,
    },
    inputAndroid:{
        fontSize:16,
        paddingVertical:8,
        paddingHorizontal:10,
        borderWidth:0.5,
        borderColor:'grey',
        borderRadius:8,
        color:'black',
        paddingRight:30,
        backgroundColor:'#fff',
        
    },
});