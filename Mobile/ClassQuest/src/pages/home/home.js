import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../home/style';

export default function Home({ navigation }) {

    const voltar = () => {
        // clearInterval(myInterval)
        navigation.navigate('Login')
        // navigation.goBack()
    }

    const menu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity style={styles.imagenzinha} onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../assets/favicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.txtEntrar}>Entrar em uma turma</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}