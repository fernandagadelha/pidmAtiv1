import React from 'react';
import { View, Text, Image } from 'react-native';


export default class Corpo extends React.Component{
    render(){
        const imagem = { uri: 'https://cdn.vox-cdn.com/thumbor/rmzz8m10tBpAzznfjmwmRZX3DOU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/3844120/bojack.0.jpg'            
        }
        return(
            <Image source={imagem} style={{width:120, height:120}}/>

           
        )
    }
}