import { View, Text, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import styles from '../cadastro/style'

export default function Cadastro({ navigation }) {

    const voltar = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/fundo.jpg")} resizeMode="cover" style={styles.imagem}></ImageBackground>
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
            <View style={styles.cadastro}>
                <TouchableOpacity style={styles.buttonzinho} onPress={() => { login() }}>
                    <Text style={styles.txtbutton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}