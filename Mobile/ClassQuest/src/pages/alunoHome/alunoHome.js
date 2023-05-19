import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState, useEffect } from 'react'
import styles from '../alunoHome/style'

export default function Aluno({ navigation }) {

    const [Aluno, setCadAluno] = useState([])

    const voltar = () => {
        navigation.navigate('Login')

    }

    const menu = () => {
        navigation.openDrawer();
    }

    useEffect(() => {
        // cadAluno()
        setInterval(() => {
            // cadAluno()
        }, 3000)
    }, [])

    const cadAluno = () => {
        fetch('http://localhost:3000/adicionarAluno/:id_turma')
            .then(res => { return res.json() })
            .then(data => {
                setCadAluno(data)
            })
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity style={styles.imagenzinha} onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../assets/favicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.txtEntrar}> Entrar em uma turma </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.turmas}>
                <View style={styles.turma}>
                    <View style={styles.divImage2}>
                        <Image style={styles.image2} source={require('../../../assets/pontinhos.png')} />
                    </View>
                    <Image style={styles.image} source={require('../../../assets/favicon.png')} />
                    <Text>turminha</Text>
                </View>
            </View>
        </View>
    )
}