import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import styles from "./style";
import AtividadesConcluidas from "../../../components/ativadadesConcluidas/atividadesConcluida";

export default function Atividades({ navigation }) {
  const [atividadesConcluidas, setAtividadesConcluidas] = useState([]);

  useEffect(() => {
    fetchAtividadesConcluidas();
  }, []);

  const menu = () => {
    navigation.openDrawer();
  };

  const voltar = () => {
    navigation.navigate("Login");
  };
  const fetchAtividadesConcluidas = () => {
    fetch("http://localhost:3000/atividades/viewAtividades")
      .then((resp) => resp.json())
      .then((data) => {
        setAtividadesConcluidas(data);
      })
      .catch((error) => {
        console.error("Erro ao obter atividades concluídas:", error);
      });
  };

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
        <Text style={styles.txtEntrar}> Atividade </Text>
        <TouchableOpacity
          onPress={() => {
            voltar();
          }}
        >
          <Text style={styles.txtSair}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.turmas}>
        {atividadesConcluidas.map((item, index) => {
          return <AtividadesConcluidas key={index} item={item} />;
        })}
      </View>
    </View>
  );
}
