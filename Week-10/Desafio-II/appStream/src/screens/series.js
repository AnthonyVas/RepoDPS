import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image,TouchableHighlight } from 'react-native';
const series = ({navigation}) => {
    return (
        <View >
            <ScrollView >
                <Text style={styles.titulo}>Comedia</Text>
                <View style={styles.contenedor}>
                    <View style={styles.contImage}>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/comedySeries/m1.jpg')}
                        >

                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.contDesc}>
                        <Text>The Office</Text>
                        <Text>Temporadas: 11</Text>
                    </View>
                </View>
                <View style={styles.contenedor}>
                    <View style={styles.contImage}>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/comedySeries/m2.jpg')}
                        >

                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.contDesc}>
                        <Text>asasd</Text>
                        <Text>#10 Temporadas</Text>
                    </View>
                </View>
               



                <Text style={styles.titulo}>Aventura</Text>
                <View style={styles.contenedor}>
                    <View style={styles.contImage}>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/aventureSeries/m1.jpg')}
                        >

                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.contDesc}>
                        <Text>White Lines </Text>
                        <Text>Temporadas: 1</Text>
                    </View>
                </View>
                <View style={styles.contenedor}>
                    <View style={styles.contImage}>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/aventureSeries/m2.jpg')}
                        >

                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.contDesc}>
                        <Text>El embarcadero</Text>
                        <Text> Temporadas: 2</Text>
                    </View>
                </View>
               





                <Text style={styles.titulo}>Fantasia</Text>
                <View style={styles.contenedor}>
                    <View style={styles.contImage}>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/fantasySeries/m2.jpg')}
                        >

                        </Image>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.contDesc}>
                        <Text>Treadstone </Text>
                        <Text> Temporadas:1</Text>
                    </View>
                </View>
                <View style={styles.contenedor}>
                    <View style={styles.contImage}>
                    <TouchableHighlight
                            onPress={() => navigation.navigate('video')}
                        >
                        <Image
                            style={styles.imagen}
                            source={require('../img/fantasySeries/m1.jpeg')}
                        >
                            
                        </Image>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.contDesc}>
                        <Text>Snowpiercer </Text>
                        <Text> Temporadas: 3</Text>
                    </View>
                </View>
                
            </ScrollView >

        </View >
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        marginTop:10,
        flex: 1
    },
    contImage: {
        flex: 1,
        // backgroundColor: 'red',
        paddingLeft: 20
    },
    contDesc: {
        flex: 2,
        paddingLeft:10,
        // backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagen: {
        width: 100,       
        height: 80,
        // marginRight: 10,
       
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10
    }
});

export default series;