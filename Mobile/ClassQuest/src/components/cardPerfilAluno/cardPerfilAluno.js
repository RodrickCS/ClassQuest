import { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
// import React, { Component } from 'react';
import styles from './style'

// class CardPerfilAluno extends Component {

const CardPerfilAluno = ({ item }) => {
    const [setinhaCima, setSetinhaCima] = useState(0);

    const images = [
        require('../../../assets/setaBaixo.png'),
        require('../../../assets/setaCima.png'),
    ];

    const switchImage = () => {
        setSetinhaCima((prevImage) => (prevImage + 1) % images.length)
    };

    return (
        <View>
            <TouchableOpacity style={styles.turma} onPress={switchImage}>
                <Image style={styles.image} source={require('../../../assets/favicon.png')} />
                <Text style={styles.titulo}>{item.nome}</Text>
                <Image source={images[setinhaCima]} style={styles.image2} />
            </TouchableOpacity>
        </View>
    )
}

export default CardPerfilAluno;



// render() {
//     return (
//         <View>
//             <TouchableOpacity style={styles.turma} onPress={switchImage}>
//                 <Image style={styles.image} source={require('../../../assets/favicon.png')} />
//                 <Text style={styles.titulo}>{dado.nome}</Text>
//                 <Image source={images[setinhaCima]} style={styles.image2} />
//             </TouchableOpacity>
//         </View>
//     )
// }