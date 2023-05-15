import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../alunoHome/style'

export default function Aluno({ navigation }) {

    const voltar = () => {
        navigation.navigate('Login')
    }

    const menu = () => {
        navigation.openDrawer();
    }

    return (
        <View>
            <View style={styles.divizinha}>
                <TouchableOpacity onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../assets/favicon.png')} />
                </TouchableOpacity>

                {/* <Text>Olá, {usuario.nome}</Text> */}
                {/* <Image style={styles.image} source={require('../../../assets/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg')} /> */}
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}