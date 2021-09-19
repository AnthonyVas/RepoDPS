import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Modal, Button, TouchableHighlight } from 'react-native';
const App = () => {
    const [modalVisibleplaya, setModalVisibleplaya] = useState(false);
    return (
        <>
            <ScrollView >
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={modalVisibleplaya}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}
                >
                    <View style={styles.vistaModal}>
                        <View style={styles.Modal}>
                            <Text style={styles.subtitulo}>
                                Ir a la playa
                            </Text>
                            <Text>El Salvador is on Fire</Text>
                            <Button
                                title="cerrar"
                                onPress={() => {
                                    setModalVisibleplaya(!modalVisibleplaya)
                                }}
                            ></Button>
                        </View>
                    </View>
                </Modal>
                <View style={{ flexDirection: 'row' }} >
              
                    <Image
                        style={styles.banner}
                        source={require('./src/img/nature.jpg')}
                    />
                                                

                </View>
                <View styles={styles.contenedor}>
                    <Text style={styles.titulo}>
                        Que hacer en El Salvador
                    </Text>
                    <ScrollView horizontal>
                        <View>
                            <TouchableHighlight 
                                onPress={() => {
                                    setModalVisibleplaya(!modalVisibleplaya)}}
                            >
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/nature.jpg')}
                            />
                            </TouchableHighlight>
                        </View>
                        <View>
                        <TouchableHighlight 
                                onPress={() => {
                                    setModalVisibleplaya(!modalVisibleplaya)}}
                            >
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/nature.jpg')}
                            />
                            </TouchableHighlight>
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/nature.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/forest.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.ciudad}
                                source={require('./src/img/nature.jpg')}
                            />
                        </View>
                    </ScrollView>
                    <Text style={styles.titulo}>
                        Platillos Salvadorenos
                    </Text>
                    <View>
                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/forest.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/forest.jpg')}
                            />
                        </View>
                        <View>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/forest.jpg')}
                            />
                        </View>
                    </View>

                    <Text style={styles.titulo}>
                        Rutas Turisticas
                    </Text>
                    <View style={styles.listado}>
                        <View style={styles.listaItem}>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/flores.jpg')}
                            />
                        </View>
                        <View style={styles.listaItem}>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/boqueron.jpg')}
                            />
                        </View>
                        <View style={styles.listaItem}>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/flores.jpg')}
                            />
                        </View>
                        <View style={styles.listaItem}>
                            <Image
                                style={styles.mejores}
                                source={require('./src/img/boqueron.jpg')}
                            />
                        </View>

                    </View>
                </View>
            </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({
    banner: {
        height: 250,
        flex: 1
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10
    },
    contenedor: {
        marginHorizontal: 10,
    },
    ciudad: {
        width: 250,
        height: 300,
        marginRight: 10
    },
    mejores: {
        width: '100%',
        height: 200,
        marginVertical: 5
    },
    listaItem: {
        flexBasis: '49%'
    },
    listado: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    vistaModal: {
        backgroundColor: '#000000aa', 
        flex: 1
    },
    Modal:{
        backgroundColor: '#fff',
        margin:50,
        padding:40, 
        borderRadius: 10
    },
    subtitulo:{
        fontWeight:'bold',
        fontSize:14,
        justifyContent:'center'
    },
});
export default App;