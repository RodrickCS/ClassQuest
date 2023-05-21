import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import styles from '../professorHome/style'

export default function Professor({ navigation }) {

    const voltar = () => {
        navigation.navigate('Login')
    }

    const menu = () => {
        navigation.openDrawer();
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../../assets/fundo.jpg')} resizeMode="cover" style={styles.imagem}></ImageBackground>
            <View style={styles.divizinha}>
                <TouchableOpacity style={styles.imagenzinha} onPress={() => { menu() }}>
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.txtEntrar}> Criar uma turma </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { voltar() }}>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.turmas}>
                <View style={styles.turma}>
                    <Image style={styles.image2} source={require('../../../../assets/pontinhos.png')} />
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                    <Text>turminha</Text>
                </View>
                <View style={styles.turma}>
                    <Image style={styles.image2} source={require('../../../../assets/pontinhos.png')} />
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                    <Text>turminha</Text>
                </View>
                <View style={styles.turma}>
                    <Image style={styles.image2} source={require('../../../../assets/pontinhos.png')} />
                    <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
                    <Text>turminha</Text>
                </View>
            </View>
        </View>
    )
}