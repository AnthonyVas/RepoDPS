import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
const video = () => {
    return (
        <View style={styles.contenedor}>         
            <YoutubePlayer
                            height={190}
                            play={false}
                            videoId={'Mj4_xG5NXeo'}
                        />
        </View >
    );
};

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'column',
        flex: 1
    }
    
  
});

export default video;