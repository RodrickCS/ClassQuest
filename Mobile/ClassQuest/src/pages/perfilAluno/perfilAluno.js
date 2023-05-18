import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { TextInput } from "react-native-paper";
import styles from './style'

export default function Perfil({ navigation }) {

    // const [id_aluno, setId_aluno] = useState('');

    const menu = () => {
        navigation.openDrawer();
    }

    var user = JSON.parse(localStorage.getItem('nome'))
    var id_alu = user.id_aluno
    // var id_aluno = JSON.parse(localStorage.getItem('id_aluno'))

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
    //                 throw new Error("Senha incorreta");
    //             } else if (resp.status === 404) {
    //                 throw new Error("Usuário não encontrado");
    //             } else {
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
    //                 throw new Error("Senha incorreta");
    //             } else if (resp.status === 404) {
    //                 throw new Error("Usuário não encontrado");
    //             } else {
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
    //                 throw new Error("Senha incorreta");
    //             } else if (resp.status === 404) {
    //                 throw new Error("Usuário não encontrado");
    //             } else {
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
                <Text style={styles.txtEntrar}>Perfil</Text>
                <Text style={styles.txtSair}>Sair</Text>
            </View>
            <View style={styles.dados}>
                <TextInput style={styles.inputzinho}
                    // placeholder=`${id_aluno}`
                    // value={id_aluno}
                    onChangeText={(val1) => {
                        setId_aluno(val1)
                    }} />
                <TextInput style={styles.inputzinho}
                    // placeholder=`${id_aluno}`
                    // value={id_aluno}
                    onChangeText={(val1) => {
                        setId_aluno(val1)
                    }} />
                <TextInput style={styles.inputzinho}
                    // placeholder=`${id_aluno}`
                    // value={id_aluno}
                    onChangeText={(val1) => {
                        setId_aluno(val1)
                    }} />
                <TextInput style={styles.inputzinho}
                    // placeholder=`${id_aluno}`
                    // value={id_aluno}
                    onChangeText={(val1) => {
                        setId_aluno(val1)
                    }} />
                <View style={styles.coisinhas}>
                    <TextInput style={styles.inputzinho}
                        // placeholder=`${id_aluno}`
                        // value={id_aluno}
                        onChangeText={(val1) => {
                            setId_aluno(val1)
                        }} />
                    <TextInput style={styles.inputzinho}
                        // placeholder=`${id_aluno}`
                        // value={id_aluno}
                        onChangeText={(val1) => {
                            setId_aluno(val1)
                        }} />
                </View>
                
            </View>
            <TouchableOpacity style={styles.botaozinho}>
                    <Text style={styles.txtbutton}>ok</Text>
                </TouchableOpacity>
        </View>
    )
}