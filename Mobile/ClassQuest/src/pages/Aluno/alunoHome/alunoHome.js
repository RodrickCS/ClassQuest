import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import styles from "../alunoHome/style";
import CardAlunoHome from "../../../components/cardPerfilAluno/cardPerfilAluno";

export default function Aluno({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [Codigo, setCodigo] = useState("");
  const [Token, setToken] = useState("");

  const uriCheckTurma = "http://localhost:3000/turmas/checkTurma";
  // const uriAddAluno = "http://localhost:3000/turmas/adicionarAluno/";

  const [info, setInfo] = useState({ turma: [] });
  const [myInterval, setMyInterval] = useState(null);
  const [id_turma, setId_turma] = useState();

  const menu = () => {
    clearInterval(myInterval);
    navigation.openDrawer();
  };

  const voltar = () => {
    clearInterval(myInterval);
    navigation.navigate("Login");
  };

  useEffect(() => {
    dados();
  }, []); //

  async function dados() {
    try {
      const userString = await AsyncStorage.getItem("nome");
      if (userString) {
        const user = JSON.parse(userString);
        const id_aluno = user.id_aluno;
        fetch("http://localhost:3000/alunos/readOne/" + id_aluno)
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            setInfo(data);
          });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const ModalContent = () => {
    return (
      <View style={styles.modalTotal}>
        <Text style={styles.txtCad}>Digite o codigo da turma:</Text>
        <TextInput
          value={Codigo}
          onChangeText={(val) => {
            setCodigo(val);
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
          <TouchableOpacity style={styles.okBotao} onPress={dados()}>
            <Text style={styles.txtOk}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <ModalContent />
      </Modal>
      <ImageBackground
        source={require("../../../../assets/fundo.jpg")}
        resizeMode="cover"
        style={styles.imagem}
      ></ImageBackground>
      <View style={styles.divizinha}>
        <TouchableOpacity
          style={styles.imagenzinha}
          onPress={() => {
            menu();
          }}
        >
          <Image
            style={styles.image}
            source={require("../../../../assets/favicon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.txtEntrar}> Entrar em uma turma </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            voltar();
          }}
        >
          <Text style={styles.txtSair}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.turmas}>
        {info.turma.map((att, index) => {
          return <CardAlunoHome style={{ flexDirection: 'column' }} key={index} item={att} />;
        })}
      </View>
    </View>
  );
}
