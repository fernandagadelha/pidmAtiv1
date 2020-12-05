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
                <Text>
                    <table>
                        <tr>
                            <th>Aluno</th>
                            <th>Curso</th>
                                          
                        </tr>
                        <tr>
                            <td>{this.nomealuno}</td>
                            <td>{this.cursoaluno}</td>
                            
                        </tr>
                    </table>
                                                      
                    
                </Text>

            </View>
        )
    }
}

