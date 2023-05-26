// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
// import styles from './style'
// import CardPerfilAluno from '../../../components/cardPerfilAluno/cardPerfilAluno'

// export default function PerfilAluno({ navigation }) {
//     const [Id_aluno, SetId_aluno] = useState()
//     const [info, setInfo] = useState({ "turma": [] })

//     const obterItem = async () => {
//         try {
//             const userString = await AsyncStorage.getItem('nome');
//             if (userString !== null) {
//                 const user = JSON.parse(userString);
//                 SetId_aluno(user.id_aluno);
//             } else {
//                 console.log('Nenhum user encontrado.');
//             }
//         } catch (error) {
//             console.log('Erro ao obter o item:', error);
//         }
//     };


//     const myInterval = setInterval(() => {
//         dados()
//     }, 50000)

//     useEffect(() => {
//         obterItem()
//         // dados()
//         myInterval
//     }, []);

//     function dados() {
//         try {
//           fetch('http://localhost:3000/alunos/readOne/' + Id_aluno)
//             .then((resp) => {
//               return resp.json();
//             })
//             .then((data) => {
//               setInfo(data);
//               console.log(data);
//             })
//             .catch((error) => {
//               console.log('Erro ao processar a resposta da requisição:', error);
//             });
//         } catch (error) {
//           console.log('Erro durante a requisição:', error);
//         }
//       }

//     const menu = () => {
//         navigation.openDrawer();
//         clearInterval(myInterval)
//     }

//     const voltar = () => {
//         navigation.navigate('Login')
//         clearInterval(myInterval)
//     }
//     return (
//         <View>
//             <ImageBackground source={require('../../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
//             <View style={styles.divizinha}>
//                 <TouchableOpacity onPress={() => { menu() }}>
//                     <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
//                 </TouchableOpacity>
//                 <Text style={styles.txtEntrar}>Perfil</Text>
//                 <Text style={styles.txtSair} onPress={() => { voltar() }}>Sair</Text>
//             </View>
//             <View style={styles.dados}>
//                 {
//                     info.turma.map((item, index) => {
//                         return (
//                             <View key={index}>
//                                 <CardPerfilAluno item={item} />
//                             </View>

//                         )
//                     })
//                 }
//             </View>
//         </View>
//     )
// }


import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from './style'
import CardPerfilAluno from '../../../components/cardPerfilAluno/cardPerfilAluno'

export default function PerfilAluno({ navigation }) {
    const [Id_aluno, SetId_aluno] = useState()
    const [info, setInfo] = useState({ "turma": [] })

    const obterItem = async () => {
        try {
            const userString = await AsyncStorage.getItem('nome');
            if (userString !== null) {
                const user = JSON.parse(userString);
                SetId_aluno(user.id_aluno);
                dados(); // Chamar a função dados() após obter o Id_aluno
            } else {
                console.log('Nenhum user encontrado.');
            }
        } catch (error) {
            console.log('Erro ao obter o item:', error);
        }
    };

    const myInterval = setInterval(() => {
        dados()
    }, 50000)

    useEffect(() => {
        obterItem();
        myInterval;
    }, []);

    function dados() {
        try {
          fetch('http://localhost:3000/alunos/readOne/' + Id_aluno)
            .then((resp) => {
              return resp.json();
            })
            .then((data) => {
              setInfo(data);
              console.log(data);
            })
            .catch((error) => {
              console.log('Erro ao processar a resposta da requisição:', error);
            });
        } catch (error) {
          console.log('Erro durante a requisição:', error);
        }
    }

    const menu = () => {
        navigation.openDrawer();
        clearInterval(myInterval)
    }

    const voltar = () => {
        navigation.navigate('Login')
        clearInterval(myInterval)
    }
    return (
        <View>
            <ImageBackground source={require('../../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                </TouchableOpacity>
                <Text style={styles.txtEntrar}>Perfil</Text>
                <Text style={styles.txtSair} onPress={() => { voltar() }}>Sair</Text>
            </View>
            <View style={styles.dados}>
                {
                    info.turma.map((item, index) => {
                        return (
                            <View key={index}>
                                <CardPerfilAluno item={item} />
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}
