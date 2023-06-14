import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { useState, useEffect } from "react";
import styles from "./style";

export default function PerfilProf({ navigation }) {
  const [myInterval, setMyInterval] = useState(null);
  const [info, setInfo] = useState({ turma: [] });

  useEffect(() => {
    dados();
    setMyInterval(setInterval(() => {
      dados();
    }, 5000));
  }, []);

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
            console.log(data);
          });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const menu = () => {
    clearInterval(myInterval);
    navigation.openDrawer();
  };

  const voltar = () => {
    clearInterval(myInterval);
    navigation.navigate("Login");
  };

  return (
    <View>
      <ImageBackground
        source={require("../../../../assets/fundo.jpg")}
        resizeMode="cover"
        style={styles.imagem}
      ></ImageBackground>
      <View style={styles.divizinha}>
        <TouchableOpacity
          onPress={() => {
            menu();
          }}
        >
          <Image
            style={styles.image}
            source={require("../../../../assets/favicon.png")}
          />
        </TouchableOpacity>
        <Text style={styles.txtEntrar}>Perfil</Text>
        <Text
          style={styles.txtSair}
          onPress={() => {
            voltar();
          }}
        >
          Sair
        </Text>
      </View>
      {info.pontos &&
                info.pontos.map((ix, index) => {
                  return (
                    <View key={index}>
                      <Text style={styles.tituloP}>Seus pontos: {ix.qtd}</Text>
                    </View>
                  );
                })}
      {info.turma &&
        info.turma.map((i, index) => {
          return (
            <View style={styles.dados} key={index}>
              <TouchableOpacity style={styles.turma}>
                <Image
                  style={styles.image}
                  source={require("../../../../assets/favicon.png")}
                />
                <Text style={styles.titulo}>{i.nome}</Text>
              </TouchableOpacity>

              
            </View>
          );
        })}
    </View>
  );
}
