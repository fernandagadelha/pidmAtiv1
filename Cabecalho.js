import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Cabecalho extends React.Component {
    constructor(props) {
        super(props);
        this.nomealuno = props.nomealuno;
        this.cursoaluno = props.cursoaluno;
        console.log("construtor foi executado!")

    }
    render(){
        return(
            <View className="cabecalho">
                <Text><h1>{this.nomealuno}</h1></Text>
                <Text><b>Curso:</b> {this.cursoaluno}</Text>              

            </View>
        )
    }
}



