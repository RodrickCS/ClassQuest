import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from '../cadastro/style'
// import Menu from '../home/style'

const voltar = () => {
    // clearInterval(myInterval)
    navigation.navigate('Login')
    // navigation.goBack()
}

export default function Cadastro({ navigation }) {

    return (
        <View>
            {/* <Image style={styles.image} source={require('../../../assets/logo.png')} /> */}
            <View style={styles.divizinha}>
                <Text style={styles.titulo}>Cadastro</Text>
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.dados}>
                <Text>Nome:</Text>
                <TextInput style={styles.inputzinho}></TextInput>
                <Text>Email:</Text>
                <TextInput style={styles.inputzinho}></TextInput>
                <Text>Senha:</Text>
                <TextInput secureTextEntry={true} style={styles.inputzinho}></TextInput>
                <Text>Digite a senha novamente:</Text>
                <TextInput secureTextEntry={true} style={styles.inputzinho}></TextInput>
            </View>
        </View>
    )
}