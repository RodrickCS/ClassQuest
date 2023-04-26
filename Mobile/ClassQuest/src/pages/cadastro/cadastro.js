import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../cadastro/style'
// import Menu from '../home/style'

export default function Cadastro({ navigation }) {

    return (
        <View>
            {/* <Image style={styles.image} source={require('../../../assets/logo.png')} /> */}
            <View style={styles.divizinha}>
                <Text style={styles.titulo}>Cadastro</Text>
                <TouchableOpacity>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}