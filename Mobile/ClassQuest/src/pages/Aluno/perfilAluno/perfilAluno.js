import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState, useEffect } from "react";
import styles from './style'
import CardPerfilAluno from '../../../components/cardPerfilAluno/cardPerfilAluno'

export default function PerfilAluno({ navigation }) {

    const [caixa, setCaixa] = useState('');
    const [info, setInfo] = useState({ "turma": [] })
    var dadinhos = info.turma
    var user = JSON.parse(localStorage.getItem('nome'))
    var id_aluno = (user.id_aluno)
    // const [setinhaCima, setSetinhaCima] = useState(0);

    // const images = [
    //     require('../../../assets/setaBaixo.png'),
    //     require('../../../assets/setaCima.png'),
    // ];

    const myInterval = setInterval(() => {
        dados()
    }, 50000)

    useEffect(() => {
        dados()
        myInterval
    }, []);

    function dados() {
        fetch('http:localhost:3000/alunos/readOne/' + 1)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setInfo(data);
                console.log(data);
            })
    }

    // const switchImage = () => {
    //     setSetinhaCima((prevImage) => (prevImage + 1) % images.length)
    // };

    const menu = () => {
        navigation.openDrawer();
    }

    const voltar = () => {
        navigation.navigate('Login')
        clearInterval(myInterval)
    }

    return (
        <View>
            <ImageBackground source={require('../../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                </TouchableOpacity>
                <Text style={styles.txtEntrar}>Perfil</Text>
                <Text style={styles.txtSair} onPress={() => { voltar() }}>Sair</Text>
            </View>
            <View style={styles.dados}>
                {
                    dadinhos.map((item, index) => {
                        return (
                            <View key={index}>
                                <CardPerfilAluno item={item} />
                            </View>

                        )
                    })
                }
            </View>
        </View>
    )
}