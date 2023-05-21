import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState, useEffect } from "react";
import styles from './style'

export default function PerfilAluno({ navigation }) {

    const [id_aluno, setId_aluno] = useState('');
    const [caixa, setCaixa] = useState('');
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        require('../../../../assets/setaBaixo.png'),
        require('../../../../assets/setaCima.png'),
    ];

    const switchImage = () => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const menu = () => {
        navigation.openDrawer();
    }

    var user = JSON.parse(localStorage.getItem('nome'))
    // var id_alu = user.id_aluno
    // var id_aluno = JSON.parse(localStorage.getItem('id_aluno'))

    // useEffect(() => {
    //     // cadAluno()
    //     setInterval(() => {
    //         // cadAluno()
    //     }, 3000)
    // }, [])

    // const postData = async () => {
    //     try {
    //       const response = await fetch('https://api.example.com/post', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ key: 'value' }), // Dados a serem enviados no corpo da solicitação
    //       });
      
    //       const data = await response.json();
    //       console.log(data); // Dados de resposta do servidor
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
      

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
            // key={index}
            >
                <TouchableOpacity style={styles.turma} onPress={switchImage}>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                    <Text style={styles.titulo}>turminha do aluno</Text>
                    <Image source={images[currentImage]} style={styles.image2} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.turma} onPress={switchImage}>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                    <Text style={styles.titulo}>turminha do aluno</Text>
                    <Image source={images[currentImage]} style={styles.image2} />
                </TouchableOpacity>
            </View>
            {/* )
                })
            } */}
        </View>
    )
}