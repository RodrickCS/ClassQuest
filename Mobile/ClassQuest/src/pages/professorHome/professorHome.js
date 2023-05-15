import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../professorHome/style'

export default function Professor({ navigation }) {

    const voltar = () => {
        navigation.navigate('Login')
    }

    const menu = () => {
        navigation.openDrawer();
    }

    return (
        <View>
            {/* <Image style={styles.image} source={require('../../../assets/logo.png')} /> */}
            <View style={styles.divizinha}>
            <TouchableOpacity onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../assets/favicon.png')} />
                </TouchableOpacity>
                {/* <Text>{usuario.nome}</Text> */}
                {/* <Image style={styles.image} source={require('../../../assets/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg')} /> */}
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}