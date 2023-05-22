import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState, useEffect } from "react";
import styles from './style'

export default function PerfilAluno({ navigation }) {

    // const [id_aluno, setId_aluno] = useState('');
    const [caixa, setCaixa] = useState('');
    const [info, setInfo] = useState([]);
    const [setinhaBaixo, setSetinhaBaixo] = useState(0);
    const [setinhaCima, setSetinhaCima] = useState(0);
    const images = [
        require('../../../../assets/setaBaixo.png'),
        require('../../../../assets/setaCima.png'),
    ];

    const myInterval = setInterval(() => dados(), 5000)

    const switchImageNext = () => {
        setSetinhaCima((prevImage) => (prevImage + 1) % images.length)
    };

    const switchImageBefore = () => {
        setSetinhaBaixo((prevImage) => prevImage === 0 ? images.length - 1 : prevImage - 1)
    }

    const menu = () => {
        navigation.openDrawer();
    }

    const voltar = () => {
        navigation.navigate('Login')
        clearInterval(myInterval)
    }

    const teste = () => {
        console.log(info);
    }

    var user = JSON.parse(localStorage.getItem('nome'))
    var id_aluno = (user.id_aluno)

    function dados() {
        // let uri = `` + ;

        fetch('http://localhost:3000/alunos/readOne/' + id_aluno)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                setInfo(data);
            })
    }
    dados()
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
            
            {/* {
                info.map((i, index) => {
                    return (
                        <View style={styles.dados}
                            key={index}
                        >
                            <TouchableOpacity style={styles.turma} onPress={switchImageBefore}>
                                <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                                <Text style={styles.titulo}>turminha do aluno</Text>
                                <Image source={images[setinhaBaixo]} style={styles.image2} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.turma} onPress={switchImageNext}>
                                <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                                <Text style={styles.titulo}>turminha do aluno</Text>
                                <Image source={images[setinhaCima]} style={styles.image2} />
                            </TouchableOpacity>
                        </View>
                    )
                })
            } */}
        </View>
    )
}

