import { Text, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Drawer = createDrawerNavigator();

import Perfil from '../../pages/Aluno/perfilAluno/perfilAluno';
import Aluno from '../../pages/Aluno/alunoHome/alunoHome';

export default function Menu({ navigation }) {
    
    const [setinhaCima, setSetinhaCima] = useState(0);

    const images = [
        require('../../../../assets/setaBaixo.png'),
        require('../../../../assets/setaCima.png'),
    ];

    const cardPerfilAluno = () => {

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
}