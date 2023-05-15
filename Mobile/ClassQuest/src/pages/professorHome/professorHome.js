import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../professorHome/style'
// import Menu from '../home/style'

const voltar = () => {
    navigation.navigate('Login')
}

export default function Professor({ navigation }) {

    return (
        <View>
            {/* <Image style={styles.image} source={require('../../../assets/logo.png')} /> */}
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