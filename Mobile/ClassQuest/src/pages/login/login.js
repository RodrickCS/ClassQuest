import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, CheckBox, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../login/style'

// const image = { url: '../../../assets/fundoLogin.jpg' };

export default function Login({ navigation }) {
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')
    const [isProf, setIsProf] = useState(false);
    const [isAlun, setIsAlun] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/fundoLogin.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.imagenzinha}>
                <Image style={styles.image} source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.divInputzinho}>
                <TextInput style={styles.inputzinho} placeholder='Digite o email' value={Email} onChangeText={(val) => { setEmail(val) }} />
                <TextInput style={styles.inputzinho} placeholder='Digite a senha' value={Senha} onChangeText={(val1) => { setSenha(val1) }} />
            </View>
            <View>
                <Text style={styles.label}>Sou:
                    <Text style={styles.label}><CheckBox value={isAlun} onValueChange={setIsAlun} />  Aluno(a)</Text>
                    <Text style={styles.label}><CheckBox value={isProf} onValueChange={setIsProf} />  Professor(a)</Text>
                </Text>
                <TouchableOpacity style={styles.buttonzinho} >
                    <Text style={styles.txtbutton}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.txtAbaixo}>ou</Text>
                <Text style={styles.txtCad}>Cadastre-se</Text>
            </View>
        </View>
    )
}