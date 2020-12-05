
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
import Disciplina from './Disciplina';


export default class App extends React.Component {
  
  render(){
    return(
      <View style={styles.container}>
        <StatusBar style="auto"/>
        <Cabecalho nomealuno="Bojack" cursoaluno="Design Digital"/>
        <Corpo/>
        <Disciplina disciplina="PIDM"/>
        <Disciplina disciplina="Design e Inovação"/>
        <Disciplina disciplina="Projeto IV"/>
        <Disciplina disciplina="Concepção e Desenvolvimento de Produto"/>

      </View>
      
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
  