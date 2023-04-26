import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RadioButton } from 'react-native-paper';
import styles from '../login/style'

export default function Login({ navigation }) {
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');
    const [Msg, setMsg] = useState('');
    const [checked, setChecked] = useState('aluno');

    function validarLogin() {
        // const options = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: `{"email":"${Email}","senha":"${Senha}"}`
        // };

        // fetch('http://localhost:3000/usuarioLogin', options)
        //     .then(response => response.json())
        //     .then(async response => {
        //         if (response.id == undefined) {
        //             setMsg(response.Msg);
        //         } else {
        //             await AsyncStorage.setItem('userdata', JSON.stringify(response[0]));
        //             setMsg("");
        navigation.navigate('Home');
        // }
        // })
    }

    function cadastro(){
        navigation.navigate('Cadastro');
    }
    const [password, setPassword] = useState('');  
    const [passwordVisibility, setPasswordVisibility] = useState(true);  
    const [rightIcon, setRightIcon] = useState('eye');  
    const [rightIconColor, setRightIconColor] = useState('#0C8A7B');
    
    const handlePasswordVisibility = () => {  
        if (rightIcon === 'eye') {  
            setRightIcon('eye-slash');  
            //setRightIconColor('#FF0000')  
            setPasswordVisibility(!passwordVisibility);  
        } else if (rightIcon === 'eye-slash') {  
            setRightIcon('eye');  
            //setRightIconColor('#0C8A7B')
            setPasswordVisibility(!passwordVisibility);  
        }  
    };  

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.imagenzinha}>
                <Image style={styles.image} source={require('../../../assets/logo.png')} />
            </View>
            <View style={styles.divInputzinho}>
                <TextInput keyboardType='email-address' style={styles.inputzinho} placeholder='Digite o email' value={Email} onChangeText={(val) => { setEmail(val) }} />
                <TextInput secureTextEntry={true} style={styles.inputzinho} placeholder='Digite a senha' value={Senha} onChangeText={(val1) => { setSenha(val1) }} />
                <Text style={styles.txtErr} >{Msg}</Text>
            </View>
            <View>
                <Text style={styles.label}>Sou:
                    <Text style={styles.label}><RadioButton
                        value="aluno"
                        status={checked === 'aluno' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('aluno')} />  Aluno(a)</Text>
                    <Text style={styles.label}><RadioButton
                        value="professor"
                        status={checked === 'professor' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('professor')} />  Professor(a)</Text>
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttonzinho} onPress={() => { validarLogin() }}>
                    <Text style={styles.txtbutton}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.txtAbaixo}>ou</Text>
                <TouchableOpacity onPress={() => { cadastro() }}>
                    <Text style={styles.txtCad}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}