import { Text, Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import styles from "./style";

const Atividade = ({ att }) => {

    const [showModal, setShowModal] = useState(false)

    function opcoes() {
        setShowModal(!showModal)
    }

    return (
        <View style={styles.turma}>
            <TouchableOpacity style={styles.divImage2} onPress={opcoes}>
                <Image style={styles.image2} source={require('../../../assets/pontinhos.png')} />
                {/* <TouchableOpacity style={{ display: showModal ? 'flex' : 'none' }} onPress={sairTurma}>
                    <Text style={styles.txtSairTurma}>Excluir turma</Text>
                </TouchableOpacity> */}
            </TouchableOpacity>
            <Image style={styles.image} source={require('../../../assets/favicon.png')} />
            <Text>turminha</Text>
        </View >
    );
}

export default Atividade;
