import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "./style";
import CardAlunoHome from "../../../components/cardPerfilAluno/cardPerfilAluno";

export default function Atividades({ navigation }) {
  const [info, setInfo] = useState({ turma: [] });
  const [myInterval, setMyInterval] = useState(null);
  const addConcluir = "/concluir";
  const addConcluirDnv = "/concluirNovamente"

  const menu = () => {
    // clearInterval(myInterval);
    navigation.openDrawer();
  };

  const voltar = () => {
    // clearInterval(myInterval);
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

  async function enviarImagem() {
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

  useEffect(() => {
    dados();
  }, []);

  return (
    <View style={styles.container}>
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
          return <CardAlunoHome key={index} item={att} />;
        })}
    </View>
  );
}
