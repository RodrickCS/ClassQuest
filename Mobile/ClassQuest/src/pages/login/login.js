import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles from '../login/style'

export default function Login({ navigation }) {
    const [Email, setEmail] = useState('')
    const [Senha, setSenha] = useState('')

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/logo.jpeg')} />
            <View style={styles.divInputzinho}>
                <TextInput style={styles.inputzinho} placeholder='Digite o email' value={Email} onChangeText={(val) => { setEmail(val) }} />
                <TextInput style={styles.inputzinho} placeholder='Digite a senha' value={Senha} onChangeText={(val1) => { setSenha(val1) }} />
                <TouchableOpacity style={styles.buttonzinho} >
                    <Text style={styles.txtbutton}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}