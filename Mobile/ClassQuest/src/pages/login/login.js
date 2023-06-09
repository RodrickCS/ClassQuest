import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { TextInput } from "react-native-paper";
import { RadioButton } from "react-native-paper";
import styles from "../login/style";

export default function Login({ navigation }) {
    const [Email, setEmail] = useState("");
    const [Senha, setSenha] = useState("");
    const [Msg, setMsg] = useState('');
    const [checked, setChecked] = useState("aluno");

    function cadastro() {
        navigation.navigate('Cadastro');
    }

    function login() {
        let form = {
            email: Email,
            senha: Senha,
        };
        let uri = checked === "professor" ? "http://localhost:3000/professores/login" : "http://localhost:3000/alunos/login";
        let path = checked === "professor" ? "MenuProfessor" : "MenuAluno";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        };
        fetch(uri, options)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                } else if (resp.status === 401) {
                    setMsg("Senha incorreta")
                    throw new Error("Senha incorreta");
                } else if (resp.status === 404) {
                    setMsg("Usuário não encontrado")
                    throw new Error("Usuário não encontrado");
                } else {
                    setMsg("Erro interno do servidor")
                    throw new Error("Erro interno do servidor");
                }
            })
            .then((data) => {
                // AsyncStorage.setItem("info", JSON.stringify(data.info));
                AsyncStorage.setItem("nome", JSON.stringify(data.info));
                AsyncStorage.setItem("token", JSON.stringify(data.token));
                navigation.navigate(path);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/fundo.jpg")} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.imagenzinha}>
                <Image style={styles.image} source={require("../../../assets/logo.png")}/>
            </View>
            <View style={styles.divInputzinho}>
                <TextInput keyboardType="email-address" style={styles.inputzinho} placeholder="Digite o email" value={Email} onChangeText={(val) => { setEmail(val) }}/>
                <TextInput secureTextEntry={true} style={styles.inputzinho} placeholder="Digite a senha" value={Senha} onChangeText={(val1) => { setSenha(val1) }}/>
                <Text style={styles.txtErr}>{Msg}</Text>
            </View>
            <View style={styles.textinho}>
                <Text style={styles.label}>Sou:</Text>
                <RadioButton value="aluno" status={checked === "aluno" ? "checked" : "unchecked"} onPress={() => setChecked("aluno")} />
                <Text style={styles.label}>Aluno(a)</Text>
                <RadioButton value="professor" status={checked === "professor" ? "checked" : "unchecked"} onPress={() => setChecked("professor")} />
                <Text style={styles.label}>Professor(a)</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonzinho} onPress={() => { login() }}>
                    <Text style={styles.txtbutton}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.txtAbaixo}>ou</Text>
                <TouchableOpacity onPress={() => { cadastro() }}>
                    <Text style={styles.txtCad}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
