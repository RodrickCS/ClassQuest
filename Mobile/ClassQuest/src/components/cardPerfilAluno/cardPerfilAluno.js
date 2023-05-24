import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

import Perfil from '../../pages/Aluno/perfilAluno/perfilAluno';
import Aluno from '../../pages/Aluno/alunoHome/alunoHome';

export default function Menu({ navigation }) {

    var user = JSON.parse(localStorage.getItem('nome'))

    return (
        <View >
        <TouchableOpacity style={styles.turma} onPress={() => { setSetinhaCima((prevImage) => (prevImage + 1) % images.length)}}>
            <Image style={styles.image} source={require('../../../../assets/favicon.png')} />
            <Text style={styles.titulo}>{dado.nome}</Text>
            <Text style={styles.titulo}> - {dado.id_turma}</Text>
            <Image source={images[setinhaCima]} style={styles.image2} />
        </TouchableOpacity>
    </View>
    )
}