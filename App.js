
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
import Disciplina from './Disciplina';


export default class App extends React.Component {
  
  render(){
    return(
      <View classname="App">
        <Cabecalho nomealuno="Bojack" cursoaluno="Design Digital"></Cabecalho>
        <Corpo></Corpo>
        <Disciplina disciplina="PIDM"></Disciplina>

      </View>
      
    )
  }
}
  