import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../login/style'

export default function Login({ navigation }) {
    // const [Email, setEmail] = useState('')
    // const [Senha, setSenha] = useState('')
    // const [Msg, setMsg] = useState('')

    // function validarLogin() {
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: `{"email":"${Email}","senha":"${Senha}"}`
    //     };

    //     fetch('http://localhost:3000/usuarioLogin', options)
    //         .then(response => response.json())
    //         .then(async response => {
    //             if (response.id == undefined) {
    //                 setMsg(response.Msg);
    //             } else {
    //                 await AsyncStorage.setItem('userdata', JSON.stringify(response[0]));
    //                 setMsg("");
    //                 navigation.navigate('Home');
    //             }
    //         })
    // }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../../../Docs/Assets/logo.jpeg')} />
            <View style={styles.divInputzinho}>
                <TextInput style={styles.inputzinho} placeholder='Digite o email' value={Email} onChangeText={(val) => { setEmail(val) }} />
                <TextInput style={styles.inputzinho} placeholder='Digite a senha' value={Senha} onChangeText={(val1) => { setSenha(val1) }} />
                <Text style={styles.txtErr} >{Msg}</Text>
                <TouchableOpacity style={styles.buttonzinho} onPress={() => { validarLogin() }}>
                    <Text style={styles.txtbutton}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}