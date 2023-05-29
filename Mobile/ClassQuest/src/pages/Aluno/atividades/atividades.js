import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from 'react'
import { View, Text, Modal, TouchableOpacity, Image, ImageBackground, TextInput, Alert } from 'react-native';
import styles from './style'

export default function Atividade({ navigation }) {

    const menu = () => {
        // clearInterval(myInterval);
        navigation.openDrawer();
    };

    const voltar = () => {
        // clearInterval(myInterval);
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity style={styles.imagenzinha} onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                </TouchableOpacity>
                    <Text style={styles.txtEntrar}> Atividades </Text>
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}