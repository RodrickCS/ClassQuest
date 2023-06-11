import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, Modal, Linking } from "react-native";
import styles from "./style";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const cardAttAluno = ({ item }) => {

    const ativadadeBaixar = async (arquivo) => {
        const azureUrl = `https://classquest.blob.core.windows.net/data/${arquivo}`;
        await Linking.openURL(azureUrl);
    };

    const [setinhaCima, setSetinhaCima] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)
    const [qtd, setQtd] = useState();
    const [id_turma, setId_turma] = useState();
    const [id_aluno, setId_aluno] = useState();

    const images = [
        require("../../../assets/setaBaixo.png"),
        require("../../../assets/setaCima.png")
    ];

    async function criarPontos(id_aluno, id_turma) {
        try {
            const responsePontos = await fetch(`http://localhost:3000/pontos/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id_aluno: id_aluno,
                    id_turma: id_turma
                })
            });

            if (responsePontos.ok) {
                await fetch(`http://localhost:3000/pontos/addPoints/${id_aluno}/${id_turma}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        qtd: qtd
                    })
                });
            } else {
                // Handle error response from POST request
                console.error("Failed to create points");
            }
        } catch (error) {
            // Handle network or other errors
            console.error("Error occurred while creating points:", error);
        }
    }

    const ModalQtd = (id_aluno, id_turma) => {

        return (
            <View style={styles.modalTotal}>
                <Text style={styles.txtCad}>Digite a quantidade de pontos:</Text>
                <TextInput
                    autoFocus={true}
                    keyboardType="default"
                    value={qtd}
                    onChangeText={(val) => {
                        setQtd(val);
                    }}
                    style={styles.inputzinho}
                ></TextInput>

                <View style={styles.botoes}>
                    <TouchableOpacity
                        style={styles.sairBotao}
                        onPress={() => setModalVisible(false)}
                    >
                        <Text style={styles.txtFechar}>Fechar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.okBotao} onPress={() => { criarPontos(id_aluno, id_turma) }}>
                        <Text style={styles.txtOk}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    const opGeral = (id_aluno, id_turma) => {
        setModalVisible(true)
        setId_aluno(id_aluno)
        ModalQtd(id_aluno, id_turma)
    }
    const ModalContent = () => {
        return (
            <View style={{ ...styles.divTxtAtt, display: showModal ? "flex" : "none" }}>
                {item.atividades_concluidas.map((t, index) => {

                    return (
                        <View key={index} style={{ flexDirection: 'row' }}>
                            <Modal visible={modalVisible} animationType="slide" transparent>
                                <ModalQtd />
                            </Modal>
                            <View style={{ justifyContent: 'center', flexDirection:'row', border: '1px solid black', width: '150px' }}>
                                <Text>Nome: {t.aluno.nome}</Text>
                                <TouchableOpacity onPress={() => { ativadadeBaixar(t.arquivo) }}>
                                    <Image source={require("../../../assets/download.png")} style={{ height: '15px', width: '15px', margin: '5px', justifyContent: 'flex-end' }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { opGeral(t.id_aluno, id_turma) }}>
                                    <Image source={require("../../../assets/addPontos.png")} style={{ height: '15px', width: '15px', margin: '5px' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    };
    const opcoes = (id_turma) => {
        setSetinhaCima((prevImage) => (prevImage + 1) % images.length);
        setShowModal(!showModal)
        setId_turma(id_turma)
    }

    return (
        <View style={styles.turma}>

            <TouchableOpacity
                onPress={() => opcoes(item.id_turma)}
            >
                <Text style={{ textAlign: 'center' }}>{item.turma.nome}</Text>
                <Text>Titulo:{item.titulo}</Text>
                <Text>Descrição: {item.descricao}</Text>
                <Text>
                    Prazo: {format(new Date(item.prazo), "dd/MM/yyyy - HH:mm", { locale: ptBR })}
                </Text>
                <Image source={images[setinhaCima]} style={styles.image2} />
            </TouchableOpacity>
            <ModalContent />
        </View >
    );
};

export default cardAttAluno;
