import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../login/style'

export default function Login({ navigation }) {
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.imagenzinha}>
                <Image style={styles.image} source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.divInputzinho}>
                <TextInput style={styles.inputzinho} placeholder='Digite o email' value={Email} onChangeText={(val) => { setEmail(val) }} />
                <TextInput style={styles.inputzinho} placeholder='Digite a senha' value={Senha} onChangeText={(val1) => { setSenha(val1) }} />
            </View>
            <View>
                <TouchableOpacity style={styles.buttonzinho} >
                    <Text style={styles.txtbutton}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.txtAbaixo}>ou</Text>
                <Text style={styles.txtCad}>Cadastre-se</Text>
            </View>
        </View >
    )
}