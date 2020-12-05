import React from 'react';
import { View, Text } from 'react-native';

export default class Disciplina extends React.Component {
    constructor(props){
        super(props);
        this.disciplina = props.disciplina;
    }
    render(){
        return(
            <View className="disciplina">
                <Text><b>Disciplina:</b> {this.disciplina}</Text>
            </View>
        )
    }
}