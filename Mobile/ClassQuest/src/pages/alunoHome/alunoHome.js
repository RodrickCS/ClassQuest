import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../alunoHome/style'

export default function Aluno({ navigation }) {

    const voltar = () => {
        navigation.navigate('Login')
    }

    const menu = () => {
        navigation.openDrawer();
    }

    return (
        //         {/* <Text>Olá, {usuario.nome}</Text> */}
        //         {/* <Image style={styles.image} source={require('../../../assets/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg')} /> */}
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity style={styles.imagenzinha} onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../assets/favicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.txtEntrar}> Entrar em uma turma </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}