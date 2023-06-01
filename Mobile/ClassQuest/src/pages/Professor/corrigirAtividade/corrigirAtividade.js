import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import styles from "./style";

export default function Atividades({ navigation }) {
  const [info, setInfo] = useState({ turma: [] });
  const [myInterval, setMyInterval] = useState(null);

  const menu = () => {
    // clearInterval(myInterval);
    navigation.openDrawer();
  };

  const voltar = () => {
    // clearInterval(myInterval);
    navigation.navigate("Login");
  };

  function atividades() {
    fetch("http://localhost:3000/atividades/read")
      .then((resp) => resp.json())
      .then((data) => {
        setInfo(data);
      });
  }

  useEffect(() => {
    atividades();
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
    </View>
  );
}
