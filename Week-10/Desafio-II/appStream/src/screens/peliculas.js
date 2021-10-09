import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight } from 'react-native';
const peliculas = ({navigation}) => {
    return (
        <View style={styles.contenedor}>
            <ScrollView vertical>
                <Text style={styles.titulo}>Comedia</Text>
                <ScrollView horizontal>
                    <View>
                        <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                            <Image
                                style={styles.imagen}
                                source={require('../img/comedyMovie/m1.jpg')}

                            >
                            </Image>
                        </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/comedyMovie/m6.jpg')}
                        >
                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/comedyMovie/m2.jpg')}
                        >
                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Image
                            style={styles.imagen}
                            source={require('../img/comedyMovie/m3.png')}
                        >
                        </Image>
                    </View>
                    <View>
                        <Image
                            style={styles.imagen}
                            source={require('../img/comedyMovie/m4.jpg')}
                        >
                        </Image>
                    </View>
                    <View>
                        <Image
                            style={styles.imagen}
                            source={require('../img/comedyMovie/m5.jpg')}
                        >
                        </Image>
                    </View>
                </ScrollView>
                <Text style={styles.titulo}>Romance</Text>
                <ScrollView horizontal>
                    <View>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/horrorMovie/m1.jpg')}
                        >
                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/horrorMovie/m2.jpg')}
                        >
                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/horrorMovie/m3.jpg')}
                        >
                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Image
                            style={styles.imagen}
                            source={require('../img/horrorMovie/m4.jpg')}
                        >
                        </Image>
                    </View>
                    <View>
                        <Image
                            style={styles.imagen}
                            source={require('../img/horrorMovie/m5.jpg')}
                        >
                        </Image>
                    </View>
                    <View>
                        <Image
                            style={styles.imagen}
                            source={require('../img/horrorMovie/m6.jpg')}
                        >
                        </Image>
                    </View>
                </ScrollView>
                <Text style={styles.titulo}>Accion</Text>
                <ScrollView horizontal>
                    <View>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/accionMovie/m1.jpg')}
                        >
                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/accionMovie/m2.jpg')}
                        >
                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/accionMovie/m3.jpg')}
                        >
                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Image
                            style={styles.imagen}
                            source={require('../img/accionMovie/m4.jpg')}
                        >
                        </Image>
                    </View>
                    <View>
                        <Image
                            style={styles.imagen}
                            source={require('../img/accionMovie/m5.jpg')}
                        >
                        </Image>
                    </View>
                    <View>
                        <Image
                            style={styles.imagen}
                            source={require('../img/accionMovie/m6.jpg')}
                        >
                        </Image>
                    </View>
                </ScrollView>

            </ScrollView >

        </View >
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'column',
        flex: 1
    },

    imagen: {
        width: 250,
        height: 200,
        marginRight: 10
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10
    }
});

export default peliculas;