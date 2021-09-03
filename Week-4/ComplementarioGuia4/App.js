import React, {useState} from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Form from './components/Forms';
import Footer from './components/Footer';
import Result from './components/Result';


export default function App(){

  const [name,setName]=useState(null);
  const [bruto,setBruto] = useState(null);
  const [neto,setNeto] = useState(null);
  const isss = 0.03;
  const afp = 0.04;
  const renta = 0.05;

  const [errorMessage, setErroMessage] = useState('');
  

 

  const calculate= () =>{
      reset();
      if(!name){
          setErroMessage('Ingrese el nombre.');
      }else if(!bruto){
          setErroMessage('Ingrese el salario.');
      }else{
          const i = isss/100;
          const fee = 22;
          setNeto(bruto - (bruto * (isss+afp+renta) ));
      }
    
  };

  const reset =()=>{
      setErroMessage('');
      // setTotal(null);
  };

  return(
      <>
      {/* <StatusBar barStyle="light-content" /> */}
      <SafeAreaView style={styles.safeArea}>
          <View style={styles.background}/>
          <Text style={styles.titleApp}>Calculadora del salario neto</Text>
          <Form 
            setName={setName}
            setBruto={setBruto}            
          />
      </SafeAreaView>
      <Result
         name = {name}
         neto = {neto}
         errorMessage = {errorMessage}
      />
     <Footer calculate={calculate}/>
      </>
  );
}

const styles = StyleSheet.create({
  safeArea:{
      height:290,
      alignItems:'center',
  },
  Header:{
      // backgroundColor: colors.PRIMARY_COLOR,
      height: 200,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      alignItems: 'center'
  }, 
  HeadApp:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',
    marginTop:15,
  },
  background:{
      // backgroundColor: colors.PRIMARY_COLOR,
      height:200,
      width:'100%',
      borderBottomLeftRadius:30,
      borderBottomRightRadius: 30,
      position:'absolute',
      zIndex: -1,
  },
  titleApp:{
      fontSize:25,
      fontWeight:'bold',
      color: '#7141B1',
      marginTop:15,
  },
});