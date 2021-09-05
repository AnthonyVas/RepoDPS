import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Form from './components/Forms';

export default function App() {
  const [aP, setA] = useState('');
  const [bP, setB] = useState('');
  const [cP, setC] = useState('');
  const [resultado, setResultado] = useState('');

  const Logica = (aa,bb,cc) => {
    var a = parseFloat(aa);
    var b = parseFloat(bb);
    var c = parseFloat(cc);
    var d = (b * b) - (4 * a * c);
    var x1;
    var x2;

    if (a != 0) {
      x1 = (-b + Math.sqrt(d)) / (2 * a);
      x2 = (-b - Math.sqrt(d)) / (2 * a);
      if (d < 0) {
        d = -d;
        alert('Solucion imaginaria.');
      } else alert('Solucion real.');
  
    } else {
      x1 = 0;
      x2 = 0;
      alert('Funcion improcesable, MathError.');
    }

  
   

    var total = 'Resultado:  x1= ' + x1 + ', x2= ' + x2;
    setResultado(total);
  }

  return (
    <View style={styles.container}>
      
      <Text
        style={styles.title}>
        Calculo de la Ecuación cuadratica
      </Text>
      <Form setA={setA} setB={setB} setC={setC} />
      <Text style={styles.resultado}>{resultado}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Logica(aP, bP, cP);
        }}>
        <Text style={styles.buttonChild}>
          Calcular
        </Text>
      </TouchableOpacity>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // position:'absolute',
    backgroundColor: 'pink',
    // padding: 8,
    // flexDirection: "column" ,
    flex:1,
    width: '100%',
  },
  
  title: {
    height: 50,
    padding: 15,
    fontSize: 24,
    backgroundColor: 'orange',
    color: 'white',
    textAlign: 'center',
    // flexDirection: "column" ,
    width: '100%',
    flex:1,
    // position:'absolute',
  },
  button: {
    height: 60,
    backgroundColor: 'blue',
    marginTop: 10,
    // flexDirection: "column" ,
    width: '100%',
    flex:1,
    // position:'absolute',
  },
  buttonChild: {
    color: 'white', 
    fontSize: 24,
     textAlign: 'center',
    //  flexDirection: "column" ,
    width: '100%',
    // flex:1,
    // position:'absolute',
  },
  resultado: {
    fontSize: 32,
    // flexDirection: "column" ,
    width: '100%',
    flex:1,
    // position:'absolute',
  },
});
