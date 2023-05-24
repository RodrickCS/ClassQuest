import { View, Text, Modal, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';
import { useState, useEffect } from 'react'
import styles from '../alunoHome/style'

export default function Aluno({ navigation }) {

    const [Aluno, setAddAluno] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [Codigo, setCodigo] = useState("");

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

        fetch('http://localhost:3000/adicionarAluno/'+ id_turma)
            .then(res => { return res.json() })
            .then(data => {
                setAddAluno(data)
            })
    }
    const ModalContent = () => {
        return (
          <View style={styles.modalTotal}>
            <Text style={styles.txtCad}>Digite o codigo da turma:</Text>
            <TextInput value={Codigo} onChangeText={(val) => { setNome(val) }} style={styles.inputzinho}></TextInput>
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
                <TouchableOpacity onPress={()=>{setModalVisible(!modalVisible)}}>
                    <Text style={styles.txtEntrar}> Entrar em uma turma </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.turmas}>
                <View style={styles.turma}>
                    <View style={styles.divImage2}>
                        <Image style={styles.image2} source={require('../../../../assets/pontinhos.png')} />
                    </View>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                    <Text>turminha</Text>
                </View>
            </View>
        </View>
    )
}