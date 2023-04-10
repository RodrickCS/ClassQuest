import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import styles from '../home/style'

export default function Home({ navigation }) {
    // const [operacoes, setOperacoes] = useState([])

    // var usuario = localStorage.getItem('userdata')

    // const myInterval = setInterval(() => listarOperacoes(), 5000)

    // const listarOperacoes = () => {
    //     fetch('http://localhost:3000/operacoes')
    //         .then(res => { return res.json() })
    //         .then(data => {
    //             setOperacoes(data)
    //         })
    // }

    // const concluir = () => {
    //     listarOperacoes()
    //     const options = {
    //         method: 'PUT',
    //         headers: {
    //             Authorization: 'Bearer ' + usuario.token
    //         }
    //     };
    // }

    // const voltar = () => {
    //     clearInterval(myInterval)
    //     // navigation.navigate('Login')
    //     navigation.goBack()
    // }

    return (
        <View>
            <Image style={styles.image} source={require('../../../assets/logo.jpeg')} />
            <View style={styles.divizinha}>
                {/* <Text>{usuario.nome}</Text> */}
                {/* <Image style={styles.image} source={require('../../../assets/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg')} /> */}
                {/* <TouchableOpacity onPress={() => { voltar() }}> */}
                <TouchableOpacity>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}