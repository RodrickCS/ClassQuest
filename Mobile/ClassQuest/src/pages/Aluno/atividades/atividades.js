import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Linking,
  ImageBackground
} from "react-native";
import styles from "./style";
import CardAlunoHome from "../../../components/cardPerfilAluno/cardPerfilAluno";
import Atividade from "../../../components/atividade/atividade";

export default function Atividades({ navigation }) {
  const [info, setInfo] = useState({ turma: [] });
  const [Enviar, setEnviar] = useState();
  const [myInterval, setMyInterval] = useState(null);
  const [modalAtividade, setModalAtividade] = useState(false);
  const addConcluir = "/concluir";

  const menu = () => {
    // clearInterval(myInterval)
    navigation.openDrawer();
  };

  const voltar = () => {
    // clearInterval(myInterval)
    navigation.navigate("Login");
  };

  async function dados() {
    try {
      const userString = await AsyncStorage.getItem("nome");
      if (userString) {
        const user = JSON.parse(userString);
        const id_aluno = user.id_aluno;
        fetch("http://localhost:3000/alunos/readOne/" + id_aluno)
          .then((resp) => resp.json())
          .then((data) => {
            setInfo(data);
          });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function atividades() {
    try {
      const userString = await AsyncStorage.getItem("nome");
      if (userString) {
        const user = JSON.parse(userString);
        const id_aluno = user.id_aluno;
        fetch("http://localhost:3000/alunos/readOne/" + id_aluno)
          .then((resp) => resp.json())
          .then((data) => {
            setInfo(data);
          });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const enviarPg = async () => {
    const url = `http://127.0.0.1:5500/Mobile/ClassQuest/src/pages/pag/upload.html`;
    await Linking.openURL(url);
  };

  useEffect(() => {
    dados();
  }, []);

  const Att = () => {
    return (
      <View style={styles.modalTotal}>
        <Text style={styles.txtCad}>Atividade:</Text>
        <TouchableOpacity onPress={enviarPg}>
          <Text style={{ color: "white" }}>Upload</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalAtividade} animationType="slide" transparent>
        <Att />
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
        <Text style={styles.txtEntrar}> Atividades </Text>
        <TouchableOpacity
          onPress={() => {
            voltar();
          }}
        >
          <Text style={styles.txtSair}>Sair</Text>
        </TouchableOpacity>
      </View>
      {info.turma.map((att, index) => {
  return (
    <View key={index}>
      <CardAlunoHome item={att} />
    </View>
  );
})}

    </View>
  );
}
