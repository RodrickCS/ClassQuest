import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState, useEffect } from "react";
import styles from './style'

export default function PerfilAluno({ navigation }) {

    const [caixa, setCaixa] = useState('');
    const [info, setInfo] = useState({ "turma": [] })

    // console.log(info);
    // const [setinhaBaixo, setSetinhaBaixo] = useState(0);
    const [setinhaCima, setSetinhaCima] = useState(0);
    var dadinhos = info.turma
    const images = [
        require('../../../../assets/setaBaixo.png'),
        require('../../../../assets/setaCima.png'),
    ];
    const myInterval = setInterval(() => {
        dados()
    }, 50000)

    useEffect(() => {
        dados()
        myInterval
    }, []);

    const switchImage = (index) => {
        console.log(index);
        setSetinhaCima((prevImage) => (prevImage + 1) % images.length)

    };

    // const switchImageBefore = () => {
    //     setSetinhaBaixo((prevImage) => prevImage === 0 ? images.length - 1 : prevImage - 1)
    // }

    const menu = () => {
        navigation.openDrawer();
    }

    const voltar = () => {
        navigation.navigate('Login')
        clearInterval(myInterval)
    }

    var user = JSON.parse(localStorage.getItem('nome'))
    var id_aluno = (user.id_aluno)

    function dados() {
        fetch('http://localhost:3000/alunos/readOne/' + id_aluno)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setInfo(data);
                console.log(data);
            })
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
                    dadinhos.map((dado, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity style={styles.turma} onPress={() => { 
                                    // where
                                    setSetinhaCima((prevImage) => (prevImage + 1) % images.length) 
                                    }}>
                                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                                    <Text style={styles.titulo}>{dado.nome}</Text>
                                    <Text style={styles.titulo}> - {dado.id_turma}</Text>
                                    <Image source={images[setinhaCima]} style={styles.image2} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

