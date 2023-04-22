import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../aluno/style'
// import Menu from '../home/style'

export default function Aluno({ navigation }) {

    return (
        <View>
            {/* <Image style={styles.image} source={require('../../../assets/logo.png')} /> */}
            <View style={styles.divizinha}>
                {/* <Text>{usuario.nome}</Text> */}
                {/* <Image style={styles.image} source={require('../../../assets/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg')} /> */}
                {/* <TouchableOpacity onPress={() => { voltar() }}> */}
                <TouchableOpacity>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}