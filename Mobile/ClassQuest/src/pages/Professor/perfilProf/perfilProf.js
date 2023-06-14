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
        const id_prof = user.id_prof;
        fetch("http://localhost:3000/professores/readOne/" + id_prof)
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
      <View style={styles.dados}>
      {info.turma &&
        info.turma.map((i, index) => {
          return (
            <View style={styles.turma} key={index}>
                <Image
                  style={styles.image}
                  source={require("../../../../assets/favicon.png")}
                />
                <Text style={styles.titulo}>{i.nome}</Text>
            </View>
          );
        })}
        </View>
    </View>
  );
}
