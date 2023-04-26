import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from '../home/style'

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
        <ImageBackground source={require('../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity style={styles.imagenzinha}>
                    <Image style={styles.image} source={require('../../../assets/favicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.txtEntrar}>Entrar em uma turma</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}