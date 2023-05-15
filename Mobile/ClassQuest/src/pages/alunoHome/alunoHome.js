import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../alunoHome/style'

const voltar = () => {
    navigation.navigate('Login')
}

export default function Aluno({ navigation }) {

    return (
        <View>
            <Image style={styles.image} source={require('../../../assets/favicon.png')} />
            <View style={styles.divizinha}>
                {/* <Text>{usuario.nome}</Text> */}
                {/* <Image style={styles.image} source={require('../../../assets/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg')} /> */}
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}