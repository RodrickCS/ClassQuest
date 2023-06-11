import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Image, ImageBackground, Modal } from "react-native"
import styles from "./style"
import AtividadesConcluidas from "../../../components/ativadadesConcluidas/atividadesConcluida"
//   async function criarAtt() {

//     const responsePut = await fetch(`http://localhost:3000/premios/create`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + token.split('"')[1]
//           },
//           body: JSON.stringify({
//             id_aluno: id_aluno
//           })
//         })

//   }
export default function Atividades({ navigation }) {
  const [myInterval, setMyInterval] = useState(null)
  const [atividadesConcluidas, setAtividadesConcluidas] = useState([]);
  const [ModalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    fetchAtividadesConcluidas()
    setMyInterval(setInterval(() => {
      fetchAtividadesConcluidas()
    }, 5000))
  }, [])

  const menu = () => {
    clearInterval(myInterval)
    navigation.openDrawer()
  }

  const voltar = () => {
    clearInterval(myInterval)
    navigation.navigate("Login")
  }
  const fetchAtividadesConcluidas = () => {
    fetch("http://localhost:3000/atividades/viewAtividades")
      .then(resp => resp.json())
      .then(data => {
        setAtividadesConcluidas(data);
      })
      .catch(error => {
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
            menu()
          }}
        >
          <Image
            style={styles.image}
            source={require("../../../../assets/favicon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!ModalVisible)
          }}
        >
          <Text style={styles.txtEntrar}> Criar uma atividade </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            voltar()
          }}
        >
          <Text style={styles.txtSair}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.turmas}>
        {atividadesConcluidas.map((item, index) => {
          return <AtividadesConcluidas key={index} item={item} />
        })}
      </View>
    </View>
  )
}