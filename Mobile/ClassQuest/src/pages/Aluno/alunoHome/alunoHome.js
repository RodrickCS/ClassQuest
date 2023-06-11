import { createURL } from "expo-linking"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react"
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput
} from "react-native"
import styles from "../alunoHome/style"
import CardAlunoHome from "../../../components/cardPerfilAluno/cardPerfilAluno"

export default function Aluno({ navigation }) {

  const url = createURL('atividade', {})

  const [modalVisible, setModalVisible] = useState(false)
  const [Codigo, setCodigo] = useState("")
  const [info, setInfo] = useState({ turma: [] })
  const [myInterval, setMyInterval] = useState(null)

  useEffect(() => {
    dados()
    setMyInterval(setInterval(() => {
      dados()
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
  async function entrar() {
    try {
      const userString = await AsyncStorage.getItem("nome")
      const user = JSON.parse(userString)
      const id_aluno = user.id_aluno
      let token = await AsyncStorage.getItem("token")

      const responsePost = await fetch("http://localhost:3000/turmas/checkTurma", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.split('"')[1]
        },
        body: JSON.stringify({
          codigo: Codigo
        })
      })

      if (responsePost.ok) {
        const dataPost = await responsePost.json();
        const resourceId = dataPost[0].id_turma;
        console.log(resourceId);

        const responsePut = await fetch(`http://localhost:3000/turmas/adicionarAluno/${resourceId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token.split('"')[1]
          },
          body: JSON.stringify({
            id_aluno: id_aluno
          })
        });

        if (responsePut.ok) {
          const dataPut = await responsePut.json();
          console.log("Recurso atualizado:", dataPut);
          setModalVisible(false)
          dados()
        } else {
          console.log("Erro ao atualizar o recurso.");
        }
      } else {
        console.log("Erro ao criar o recurso.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function dados() {
    try {
      const userString = await AsyncStorage.getItem("nome")
      if (userString) {
        const user = JSON.parse(userString)
        const id_aluno = user.id_aluno
        fetch("http://localhost:3000/alunos/readOne/" + id_aluno)
          .then((resp) => {
            return resp.json()
          })
          .then((data) => {
            setInfo(data)
          })
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  const ModalContent = () => {
    return (
      <View style={styles.modalTotal}>
        <Text style={styles.txtCad}>Digite o codigo da turma:</Text>
        <TextInput
          autoFocus={true}
          keyboardType="default"
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
          <TouchableOpacity style={styles.okBotao} onPress={entrar}>
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
            setModalVisible(!modalVisible)
          }}
        >
          <Text style={styles.txtEntrar}> Entrar em uma turma </Text>
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
        {info.turma.map((att, index) => {
          return <CardAlunoHome key={index} item={att} />
        })}
      </View>
    </View>
  )
}
