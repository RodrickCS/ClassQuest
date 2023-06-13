import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Modal,
  Linking
} from "react-native";
import styles from "./style";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const cardAttAluno = ({ item }) => {
  const [setinhaCima, setSetinhaCima] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [qtd, setQtd] = useState();
  const [idTurma, setIdTurma] = useState(1);
  const [idAluno, setIdAluno] = useState(1);

  //   var idTurma;
  //   var idAluno;

  const images = [
    require("../../../assets/setaBaixo.png"),
    require("../../../assets/setaCima.png")
  ];

  const ativadadeBaixar = async (arquivo) => {
    const azureUrl = `https://classquest.blob.core.windows.net/data/${arquivo}`;
    await Linking.openURL(azureUrl);
  };

  async function criarPontos(id_aluno, id_turma) {
    try {
      let token = await AsyncStorage.getItem("token");

      console.log(id_aluno, id_turma);
      fetch(`http://localhost:3000/pontos/addPoints/${id_aluno}/${id_turma}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.split('"')[1]
        },
        body: JSON.stringify({
          qtd: qtd
        })
      })
      .then((resp) => resp.json())
      .then((data) => {
        // console.log("Atividade criada:", data);
        setModalVisible(false)
      });
    } catch (error) {
      // Handle network or other errors
      console.error("Error occurred while creating points:", error);
    }
  }

  const ModalQtd = (props) => {
    console.log(props);
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
          <TouchableOpacity
            style={styles.okBotao}
            onPress={() => {
              criarPontos(props.id_aluno, props.id_turma);
            }}
          >
            <Text style={styles.txtOk}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ModalContent = (id_turma) => {
    return (
      <View
        style={{ ...styles.divTxtAtt, display: showModal ? "flex" : "none" }}
      >
        <Modal visible={modalVisible} transparent>
          <ModalQtd id_turma={idTurma} id_aluno={idAluno} />
        </Modal>
        {item.atividades_concluidas.map((t, index) => {
          return (
            <View
              key={index}
              style={{ flexDirection: "row", paddingBottom: "5px" }}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  borderTop: "1px solid black",
                  width: "300px"
                }}
              >
                <Text>Nome: {t.aluno.nome}</Text>
                <View
                  style={{
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    flexDirection: "row"
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      ativadadeBaixar(t.arquivo);
                    }}
                  >
                    <Image
                      source={require("../../../assets/download.png")}
                      style={{ height: "15px", width: "15px", margin: "5px" }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      const idA = t.id_aluno;
                      const idT = id_turma;
                      console.log(idA, idT);
                      setIdAluno(idA);
                      setIdTurma(idT.item);
                      setModalVisible(true);
                    }}
                  >
                    <Image
                      source={require("../../../assets/addPontos.png")}
                      style={{ height: "15px", width: "15px", margin: "5px" }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.turma}>
      <TouchableOpacity
        onPress={() => {
          setSetinhaCima((prevImage) => (prevImage + 1) % images.length);
          setShowModal(!showModal);
        }}
      >
        <Text style={{ textAlign: "center" }}>{item.turma.nome}</Text>
        <Text>Titulo: {item.titulo}</Text>
        <Text>Descrição: {item.descricao}</Text>
        <Text>
          Prazo:
          {format(new Date(item.prazo), "dd/MM/yyyy - HH:mm", { locale: ptBR })}
        </Text>
        <Image source={images[setinhaCima]} style={styles.image2} />
      </TouchableOpacity>
      <ModalContent item={item.id_turma} />
    </View>
  );
};

export default cardAttAluno;
