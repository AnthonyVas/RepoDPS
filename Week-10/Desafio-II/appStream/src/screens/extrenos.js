import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const extrenos = () => {
    return (
        <View >
            <ScrollView >
                <View style={styles.contenedor}>
                    <View style={styles.contVideo}>
                        <YoutubePlayer
                            height={190}
                            play={false}
                            videoId={'ikxpwm2-fTk'}
                        />
                    </View>
                    <View style={styles.contDesc}>
                        <Text style={styles.titulo}>Ejército de los muertos</Text>
                        <Text>Con Dave Bautista de protagonista junto a Ella Purnell, Ana 
                            de la Reguera, Theo Rossi y Tig Notaro en su reparto, la historia 
                            sigue a un grupo que se debe infiltrar en la infestada ciudad de 
                            Las Vegas para robar el botín de un casino antes de que el gobierno 
                            lance una bomba nuclear sobre el lugar para acabar con la amenaza de los muertos vivientes. </Text>
                        <Text>21 de Mayo</Text>
                    </View>
                </View>
                <View style={styles.contenedor}>
                    <View style={styles.contVideo}>
                        <YoutubePlayer
                            height={190}
                            play={false}
                            videoId={'Nt_wyydppg8'}
                        />
                    </View>
                    <View style={styles.contDesc}>
                        <Text style={styles.titulo}>Cherry</Text>
                        <Text>Basada en la historia real de Nico Walker, cuenta la historia de un joven que lidia con un trastorno de estrés postraumático tras volver de la guerra de Iraq. </Text>
                        <Text>12 de Marzo</Text>
                    </View>
                </View>
                <View style={styles.contenedor}>
                    <View style={styles.contVideo}>
                        <YoutubePlayer
                            height={190}
                            play={false}
                            videoId={'Sffo8qVcrwM'}
                        />
                    </View>
                    <View style={styles.contDesc}>
                        <Text style={styles.titulo}>Snake Eyes: El origen</Text>
                        <Text>ste spin-off de 'G.I. Joe' se centra en la historia de los orígenes de Snake Eyes (Henry Golding), el ninja silencioso siempre vestido de negro y del que no se conoce el rostro, y cómo intenta convertirse en miembro del clan Arashikage. </Text>
                        <Text>13 de Agosto</Text>
                    </View>
                </View>
                 <View style={styles.contenedor}>
                    <View style={styles.contVideo}>
                        <YoutubePlayer
                            height={190}
                            play={false}
                            videoId={'_0bd5jfh8IU'}
                        />
                    </View>
                    <View style={styles.contDesc}>
                        <Text style={styles.titulo}>Confinados</Text>
                        <Text>Doug Liman, con un guion de Steven Knight (que de encierros sabe algo después de 'Locke'), nos cuenta una historia sobre una pareja al borde de un ataque de nervios: el confinamiento les ha pasado factura, su relación está rota y, encima, les aparece la oportunidad de robar un diamante valorado en tres millones de libras. </Text>
                        <Text>21 de Mayo</Text>
                    </View>
                </View>
            </ScrollView >

        </View >
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'column',
        marginTop: 10,
        flex: 1
    },
    contVideo: {
        flex: 1,
        // backgroundColor: 'red',
        paddingLeft: 20,
        paddingRight: 20
    },
    contDesc: {
        flex: 1,
        paddingLeft: 10,
        // backgroundColor: 'green',
        // alignItems: 'center',
        // justifyContent: 'center'
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

export default extrenos;