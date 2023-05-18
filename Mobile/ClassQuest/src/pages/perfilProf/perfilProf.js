import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './style'

export default function Perfil({ navigation }) {

    const menu = () => {
        navigation.openDrawer();
    }

    var user = JSON.parse(localStorage.getItem('nome'))
    var id_aluno = JSON.parse(localStorage.getItem('id_aluno'))
    var id_prof = JSON.parse(localStorage.getItem('id_prof'))

    console.log(user)

    function info() {
        let form = {
            email: Email,
            senha: Senha,
        };

        let uri = `http://localhost:3000/readOne/${id_aluno}`;

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
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function update() {
        let form = {
            email: Email,
            senha: Senha,
        };

        let uri = `http://localhost:3000/readOne/${id_prof}`;

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
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function del() {
        let form = {
            email: Email,
            senha: Senha,
        };

        let uri =`http://localhost:3000/readOne/${id_prof}`;

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
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <View>
            <View >
                <TouchableOpacity onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../assets/favicon.png')} />
                </TouchableOpacity>
                <Text> Perfilzinho </Text>
            </View>
        </View>
    )
}