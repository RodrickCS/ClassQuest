import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState, useEffect } from "react";
import styles from './style'

export default function PerfilProf({ navigation }) {

    const [info, setInfo] = useState('');

    const menu = () => {
        navigation.openDrawer();
    }

    var user = JSON.parse(localStorage.getItem('nome'))
    // var id_prof = user.id_prof

    // useEffect(() => {
    //     // cadAluno()
    //     setInterval(() => {
    //         // cadAluno()
    //     }, 3000)
    // }, [])

    // function info() {
    //     let form = {
    //         email: Email,
    //         senha: Senha,
    //     };

    //     let uri = `http://localhost:3000/readOne/${id_prof}`;

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

    //     let uri = `http://localhost:3000/readOne/${id_prof}`;

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

    //     let uri =`http://localhost:3000/readOne/${id_prof}`;

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
            <ImageBackground source={require('../../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                </TouchableOpacity>
                <Text style={styles.txtEntrar}>Perfil</Text>
                <Text style={styles.txtSair}>Sair</Text>
            </View>
            {/* {
                info.map((i, index) => {
                    return ( */}
                        <View style={styles.dados}
                        //  key={index}
                         >
                            <TouchableOpacity style={styles.turma}>
                                <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                                <Text style={styles.titulo}>turminha</Text>
                                <Image style={styles.image2} source={require('../../../../assets/setaBaixo.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.turma}>
                                <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                                <Text style={styles.titulo}>turminha</Text>
                                <Image style={styles.image2} source={require('../../../../assets/setaBaixo.png')} />
                            </TouchableOpacity>
                        </View>
                    {/* )
                })
            } */}
        </View>
    )
}