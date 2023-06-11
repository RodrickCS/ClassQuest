import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState, useEffect } from "react";
import styles from './style'

export default function PerfilProf({ navigation }) {

    const [myInterval, setMyInterval] = useState(null)
    const [info, setInfo] = useState({turma: []});

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

    var user = JSON.parse(localStorage.getItem('nome'))
    
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
             {
                info.turma.map((i, index) => {
                    return ( 
                        <View style={styles.dados}
                         key={index}
                         >
                            <TouchableOpacity style={styles.turma}>
                                <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                                <Text style={styles.titulo}>i.nome</Text>
                                <Image style={styles.image2} source={require('../../../../assets/setaBaixo.png')} />
                            </TouchableOpacity>
                        </View>
                     )
                })
            } 
        </View>
    )
}