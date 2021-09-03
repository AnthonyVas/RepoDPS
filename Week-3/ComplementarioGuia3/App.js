import { NONAME } from "dns";
import React from "react";
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Avatar } from 'react-native-elements';


const DATA = [
  {
    id: '1',
    name: 'Pupusas',
    ingre: 'Masa, Frijoles, Queso, Aceite, Sal',
    src: require('./src/img/img1.jpg'),
  },
  {
    id: '2',
    name: 'Elotes Locos',
    ingre: 'Elote, Ketchu, Mayonesa, Queso, Mostaza',
    src: require('./src/img/img3.jpg'),
  },
  {
    id: '3',
    name: 'Tamales',
    ingre: 'Masa, Pollo, Salsa de Tomate, Papa, Consome, Sal',
    src: require('./src/img/img2.jpg'),
  },
  {
    id: '4',
    name: 'Chuco',
    ingre: 'Frijoles, Sal, Alguashte',
    src: require('./src/img/img4.jpg'),
  },

];

const Cards = ({ name, ingre, src }) => {
  return (
    <View>
      <Card>
        <View style={styles.container}>
        <Image style={styles.img} source={src} />
          <View style={styles.containerDesc}>       
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.ingre}>{ingre}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
}

const main = () => {

  const renderItem = ({ item }) => (
    <Cards name={item.name} ingre={item.ingre} src={item.src} />
  );

  return (
    <View >
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({

  img: {
    width: 50,
    height: 125,
    // borderWidth: 2,
    borderColor: '#d35647',
    resizeMode: 'contain',
    margin: 8,
    borderRadius: 50,
    flex: 1,
   
  },
  title: {
    fontWeight: "500",
    fontSize: 20,
    flex: 1,
    marginTop: 20,
   
  },
  ingre: {
    flex: 5,
    alignItems:"flex-start",
    marginTop: 0,

  },
  container: {
    flexDirection: "row",
  },
  containerDesc: {
    flex:1,
    flexDirection: "column",
  },
});

export default main;