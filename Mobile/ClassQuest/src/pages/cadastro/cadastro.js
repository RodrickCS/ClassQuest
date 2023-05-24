import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Modal, ImageBackground } from 'react-native';
import { RadioButton } from "react-native-paper";
import styles from '../cadastro/style'

export default function Cadastro({ navigation }) {

    const [checked, setChecked] = useState("aluno");
    const [modalVisible, setModalVisible] = useState(false);
    const [Nome, setNome] = useState("");
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const [Cad, setCad] = useState("");

    const voltar = () => {
        navigation.navigate('Login')
    }

    function cadastrar() {
        let form = {
            nome: Nome,
            email: Email,
            senha: Senha,
        };

        let uri = checked === "professor" ? "http://localhost:3000/professores/create" : "http://localhost:3000/alunos/create";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        };

        fetch(uri, options)
            .then((resp) => {
                
                return resp.json();
            })
            .then((data) => {
                setModalVisible(!modalVisible)
                setCad(data.msg)
            })
    }
    const ModalContent = () => {
        return (
          <View style={styles.modalTotal}>
            <Text style={styles.txtCad}>{Cad}</Text>
            <View style={styles.botoes}>
                <TouchableOpacity style={styles.sairBotao} onPress={() => setModalVisible(false)}>
                <Text style={styles.txtFechar}>Fechar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.okBotao}>
                    <Text style={styles.txtOk} onPress={() => navigation.navigate("Login")}>Ok</Text>
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
            <ImageBackground source={require("../../../assets/fundo.jpg")} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <Text style={styles.titulo}>Cadastro</Text>
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dados}>
                <Text>Nome:</Text>
                <TextInput value={Nome} onChangeText={(val) => { setNome(val) }} style={styles.inputzinho}></TextInput>
                <Text>Email:</Text>
                <TextInput value={Email} onChangeText={(val1) => { setEmail(val1) }} style={styles.inputzinho}></TextInput>
                <Text>Senha:</Text>
                <TextInput value={Senha} onChangeText={(val2) => { setSenha(val2) }} secureTextEntry={true} style={styles.inputzinho}></TextInput>
                <View style={styles.textinho}>
                    <Text style={styles.label}>
                        Sou:
                    </Text>
                    <RadioButton value="aluno"
                        status={checked === "aluno" ? "checked" : "unchecked"}
                        onPress={() => setChecked("aluno")} />
                    <Text style={styles.label}>
                        Aluno(a)
                    </Text>
                    <RadioButton value="professor"
                        status={checked === "professor" ? "checked" : "unchecked"}
                        onPress={() => setChecked("professor")} />
                    <Text style={styles.label}>
                        Professor(a)
                    </Text>
                </View>
            </View>
            <View style={styles.cadastro}>
                <TouchableOpacity style={styles.buttonzinho} onPress={() => { cadastrar() }}>
                    <Text style={styles.txtbutton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}