import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';

import styles from '../home/style'

export default function Home({ navigation }) {
    const [operacoes, setOperacoes] = useState([])

    var usuario = localStorage.getItem('userdata')

    const myInterval = setInterval(() => listarOperacoes(), 5000)

    const listarOperacoes = () => {
        fetch('http://localhost:3000/operacoes')
            .then(res => { return res.json() })
            .then(data => {
                setOperacoes(data)
            })
    }

    const concluir = (id, veiculo, motorista) => {
        listarOperacoes(),
            console.log(id, veiculo, motorista)

        const options = {
            method: 'PUT',
            headers: {
                Authorization: 'Bearer ' + usuario.token
            }
        };

        fetch(`http://localhost:3000/operacoes/${id}/${veiculo}/${motorista}`, options)
            .then(response => response.status)
            .then(response => {
                if (response === 200) {
                    console.log('ok')
                }
            })
    }

    const voltar = () => {
        clearInterval(myInterval)
        // navigation.navigate('Login')
        navigation.goBack()
    }

    return (
        <View>
            <View>
            <View style={styles.divizinha}>
                    <Text>{usuario.nome}</Text>
                    <Image style={styles.image} source={require('../../../assets/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg')} />
                    <TouchableOpacity onPress={() => { voltar() }}>
                        <Text style={styles.txtSair}>Sair</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Text>Relatórios</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Manutenções</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>Operações em andamento</Text>
            </View>
            <View>
                {
                    operacoes.map((o, index) => {
                        return (
                            <ScrollView key={index}>
                                <Text>Id: {o.id}</Text>
                                <Text>Veiculo: {o.veiculo}</Text>
                                <Text>Motorista: {o.motorista}</Text>
                                <Text>Data_saida: {o.data_saida}</Text>
                                <Text>Descrição: {o.descricao}</Text>
                                <Text>Data Retorno: {o.data_retorno}</Text>
                                <TouchableOpacity onPress={() => { concluir(o.id, o.veiculo, o.motorista) }}>
                                    <Text>Concluir</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        )
                    })
                }


            </View>
        </View>
    )

}