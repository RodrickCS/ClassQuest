import { View, Text, Modal, TouchableOpacity, Image, ImageBackground, TextInput, Alert } from 'react-native';
import { useState, useEffect } from 'react'
import styles from '../alunoHome/style'

export default function Aluno({ navigation }) {

    const [modalVisible, setModalVisible] = useState(false);
    // const [VisibleTurma, setVisibleTurma] = useState(true);
    const [Codigo, setCodigo] = useState("");
    const [SairTurma, setSairTurma] = useState("");

    const uriCheckTurma = "http://localhost:3000/turmas/checkTurma";
    const uriAddAluno = "http://localhost:3000/turmas/adicionarAluno/";

    const entrarTurma = () => {
        checkUser();

        let form = {
            codigo: Codigo,
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(form),
        };

        fetch(uriCheckTurma, options)
            .then((resp) => {
                return resp.json();
            })
            .then((data) => {
                if (data.length === 1) {
                    adicionarAluno(data[0].id_turma, aluno.id_aluno);
                    // window.location.reload();
                } else {
                    Alert.alert("Hove um erro tentando entrar na turma");
                }
            });
    };

    const checkUser = () => {
        if (localStorage.getItem("token") !== null) {
            const tokenJWT = localStorage.getItem("token");
            const info = localStorage.getItem("info_user_login");

            let nome = JSON.parse(info).nome;

            document.querySelector(".nomeAluno").innerHTML = nome;

            try {
                const payload = JSON.parse(
                    atob(encodeURIComponent(tokenJWT).split(".")[1])
                );
                console.log(payload);
                const expiracao = payload.exp;
                const agora = Math.floor(Date.now() / 1000);

                if (agora >= expiracao) {
                    // logout();
                    return false;
                }

                return true;
            } catch (err) {
                // logout();
                return false;
            }
        } else {
            // window.location.href = "../login/index.html";
        }
    };

    // const [Aluno, setAddAluno] = useState([])

    const voltar = () => {
        navigation.navigate('Login')

    }
    const menu = () => {
        navigation.openDrawer();
    }
    // const myInterval = setInterval(() => {
    //     addAluno()
    // }, 3000)
    // useEffect(() => {
    //     addAluno()
    //     myInterval
    // }, [])

    const addAluno = () => {

        fetch('http://localhost:3000/adicionarAluno/' + id_turma)
            .then(res => { return res.json() })
            .then(data => {
                setAddAluno(data)
            })
    }
    const ModalContent = () => {
        return (
            <View style={styles.modalTotal}>
                <Text style={styles.txtCad}>Digite o codigo da turma:</Text>
                <TextInput value={Codigo} onChangeText={(val) => { setCodigo(val) }} style={styles.inputzinho}></TextInput>
                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.sairBotao} onPress={() => setModalVisible(false)}>
                        <Text style={styles.txtFechar}>Fechar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.okBotao}>
                        <Text style={styles.txtOk} onPress={addAluno}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const Texto = () => {
        SairTurma !== '' ? (setSairTurma("")) : (setSairTurma("Excluir"))
    };

    return (
        <View style={styles.container}>
            <Modal visible={modalVisible} animationType="slide" transparent>
                <ModalContent />
            </Modal>
            <ImageBackground source={require('../../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity style={styles.imagenzinha} onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { setModalVisible(!modalVisible) }}>
                    <Text style={styles.txtEntrar}> Entrar em uma turma </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.turmas}>
                <View style={styles.turma}>
                    <TouchableOpacity style={styles.divImage2} onPress={() => { SairTurma !== '' ? (setSairTurma("")) : (setSairTurma("Excluir")) }}>
                        <Image style={styles.image2} source={require('../../../../assets/pontinhos.png')} />
                        <Text style={styles.txtSairTurma}>{SairTurma}</Text>
                    </TouchableOpacity>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                    <Text>turminha</Text>
                </View>
                <View style={styles.turma}>
                    <TouchableOpacity style={styles.divImage2} onPress={() => { SairTurma !== '' ? (setSairTurma("")) : (setSairTurma("Excluir")) }}>
                        <Image style={styles.image2} source={require('../../../../assets/pontinhos.png')} />
                        <Text style={styles.txtSairTurma}>{SairTurma}</Text>
                    </TouchableOpacity>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                    <Text>turminha</Text>
                </View>
            </View>
        </View>
    )
}