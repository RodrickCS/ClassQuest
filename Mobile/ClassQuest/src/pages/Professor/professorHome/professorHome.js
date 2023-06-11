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
import styles from "./style"

export default function Professor({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalAluno, setModalAluno] = useState(false)
  const [Nome, setNome] = useState("")
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
  async function dados() {
    try {
      const userString = await AsyncStorage.getItem("nome")
      if (userString) {
        const user = JSON.parse(userString)
        const idzinho = user.id_prof
        fetch("http://localhost:3000/professores/readOne/" + idzinho)
          .then((resp) => resp.json())
          .then((data) => {
            setInfo(data)
          })
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  async function criarRecurso() {
    try {
      const userString = await AsyncStorage.getItem("nome")
      const user = JSON.parse(userString)
      const id_prof = user.id_prof
      let token = await AsyncStorage.getItem("token")

      const responsePost = await fetch("http://localhost:3000/turmas/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.split('"')[1]
        },
        body: JSON.stringify({
          nome: Nome
        })
      })

      if (responsePost.ok) {
        const dataPost = await responsePost.json();
        const resourceId = dataPost.id_turma;

        const responsePut = await fetch(`http://localhost:3000/turmas/adicionarProfessor/${resourceId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token.split('"')[1]
          },
          body: JSON.stringify({
            id_prof: id_prof
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

  const ModalContent = () => {
    return (
      <View style={styles.modalTotal}>
        <Text style={styles.txtCad}>Digite o nome da turma:</Text>
        <TextInput
          value={Nome}
          onChangeText={(val) => {
            setNome(val)
          }}
          autoFocus={true}
          keyboardType="default"
          style={styles.inputzinho}
        ></TextInput>
        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.sairBotao}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.txtFechar}>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.okBotao}
            onPress={() => {
              criarRecurso()
            }}
          >
            <Text style={styles.txtOk}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  //   const Alunos = () => {
  //     return (
  //       <View style={styles.modalTotal}>
  //         <Text style={styles.txtCad}>Alunos da turma:</Text>

  //         <View style={styles.botoes}>
  //           <TouchableOpacity
  //             style={styles.sairBotao}
  //             onPress={() => setModalAluno(false)}
  //           >
  //             <Text style={styles.txtFechar}>Fechar</Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity style={styles.okBotao} onPress={dados()}>
  //             <Text style={styles.txtOk}>Ok</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     )
  //   }

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide" transparent>
        <ModalContent />
      </Modal>
      {/* <Modal visible={modalAluno} animationType="slide" transparent>
        <Alunos />
      </Modal> */}
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
          <Text style={styles.txtEntrar}> Criar uma turma </Text>
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
          return (
            <View style={styles.turma} key={index}>
              <Image
                style={styles.image2}
                source={require("../../../../assets/pontinhos.png")}
              />
              <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => {
                  setModalAluno(!modalAluno)
                }}
              >
                <Image
                  style={styles.image}
                  source={require("../../../../assets/favicon.png")}
                />
                <Text>{att.nome}</Text>
                <Text>Cod: {att.codigo}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </View>
  )
}
