import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { TextInput } from "react-native-paper";
import styles from './style'

export default function Perfil({ navigation }) {

    const menu = () => {
        navigation.openDrawer();
    }

    var user = JSON.parse(localStorage.getItem('nome'))
    var id_aluno = JSON.parse(localStorage.getItem('id_aluno'))

    console.log(user)

    // function info() {
    //     let form = {
    //         email: Email,
    //         senha: Senha,
    //     };

    //     let uri = `http://localhost:3000/readOne/${id_aluno}`;

    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(form),
    //     };

    //     fetch(uri, options)
    //         .then((resp) => {
    //             if (resp.ok) {
    //                 return resp.json();
    //             } else if (resp.status === 401) {
    //                 setMsg("Senha incorreta")
    //                 throw new Error("Senha incorreta");
    //             } else if (resp.status === 404) {
    //                 setMsg("Usuário não encontrado")
    //                 throw new Error("Usuário não encontrado");
    //             } else {
    //                 setMsg("Erro interno do servidor")
    //                 throw new Error("Erro interno do servidor");
    //             }
    //         })
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    // function update() {
    //     let form = {
    //         email: Email,
    //         senha: Senha,
    //     };

    //     let uri = `http://localhost:3000/readOne/${id_aluno}`;

    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(form),
    //     };

    //     fetch(uri, options)
    //         .then((resp) => {
    //             if (resp.ok) {
    //                 return resp.json();
    //             } else if (resp.status === 401) {
    //                 setMsg("Senha incorreta")
    //                 throw new Error("Senha incorreta");
    //             } else if (resp.status === 404) {
    //                 setMsg("Usuário não encontrado")
    //                 throw new Error("Usuário não encontrado");
    //             } else {
    //                 setMsg("Erro interno do servidor")
    //                 throw new Error("Erro interno do servidor");
    //             }
    //         })
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    // function del() {
    //     let form = {
    //         email: Email,
    //         senha: Senha,
    //     };

    //     let uri =`http://localhost:3000/readOne/${id_aluno}`;

    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(form),
    //     };

    //     fetch(uri, options)
    //         .then((resp) => {
    //             if (resp.ok) {
    //                 return resp.json();
    //             } else if (resp.status === 401) {
    //                 setMsg("Senha incorreta")
    //                 throw new Error("Senha incorreta");
    //             } else if (resp.status === 404) {
    //                 setMsg("Usuário não encontrado")
    //                 throw new Error("Usuário não encontrado");
    //             } else {
    //                 setMsg("Erro interno do servidor")
    //                 throw new Error("Erro interno do servidor");
    //             }
    //         })
    //         .then((data) => {
    //             console.log(data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    return (
        <View>
            <ImageBackground source={require('../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../assets/favicon.png')} />
                </TouchableOpacity>
                <Text style={styles.txtSair}>Sair</Text>
            </View>
            <View style={styles.dados}>
            <TextInput style={styles.inputzinho} 
            // placeholder=`${user}`
            // value={Senha}
                    onChangeText={(val1) => {
                        setSenha(val1)
                    }}/>
            </View>
        </View>
    )
}