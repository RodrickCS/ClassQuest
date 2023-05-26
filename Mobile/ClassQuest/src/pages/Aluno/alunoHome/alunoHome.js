import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Modal, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';
import { useState, useEffect } from 'react'
import styles from '../alunoHome/style'

export default function Aluno({ navigation }) {

    const [Aluno, setAddAluno] = useState([])
    const [modalVisible, setModalVisible] = useState(false);
    const [Codigo, setCodigo] = useState("");
    const [info, setInfo] = useState({ turma: [{atividades:[]}] });
    const [myInterval, setMyInterval] = useState(null)
  
    useEffect(() => {
      dados();
      setMyInterval(setInterval(() => {
        dados();
      }, 5000));
    }, []);
  
    const menu = () => {
      clearInterval(myInterval);
      navigation.openDrawer();
    };
  
    const voltar = () => {
      clearInterval(myInterval);
      navigation.navigate("Login");
    };
  
    async function dados() {
      try {
        const userString = await AsyncStorage.getItem("nome");
        if (userString) {
          const user = JSON.parse(userString);
          const id_aluno = user.id_aluno;
          fetch("http://localhost:3000/alunos/readOne/" + id_aluno)
            .then((resp) => {
              return resp.json();
            })
            .then((data) => {
              setInfo(data);
              console.log(data);
            });
        } 
      } catch (error) {
        console.error("Error:", error);
      }
    }
 
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

      const texto = () => {
        return (
          <View style={styles.modalTotal}>
            <Text style={styles.txtSair}>Digite o codigo da turma:</Text>
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
                    <TouchableOpacity style={styles.divImage2} onPress={texto}>
                        <Image style={styles.image2} source={require('../../../../assets/pontinhos.png')} />
                    </TouchableOpacity>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                    <Text>turminha</Text>
                </View>
            </View>
        </View>
    )
}