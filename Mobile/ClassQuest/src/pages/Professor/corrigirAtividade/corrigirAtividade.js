import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Image, ImageBackground, Modal } from "react-native"
import styles from "./style"
import AttAluno from "../../../components/cardAttAluno/cardAttAluno"
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
  const [modalVisible, setModalVisible] = useState(true)
  useEffect(() => {
    fetchAtividadesConcluidas()
    setMyInterval(setInterval(() => {
      fetchAtividadesConcluidas()
    }, 5000))
    return () => clearInterval(myInterval);
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

  // const { titulo, turma, atividades_concluidas } = item;
  // const aluno = atividades_concluidas[0].aluno;

  // const ativadadeBaixar = (arquivo, aluno) => {
  //   const azureUrl = `https://classquest.blob.core.windows.net/data/${arquivo}`;

  //   console.log(arquivo, aluno)
  // };

  // const handleAtribuirPontos = (idAluno, idTurma) => {
  //   fetch("http://localhost:3000/pontos/addPoints/"+ id)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       console.error("Erro ao obter atividades concluídas:", error);
  //     });
  // };
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
        // onPress={() => {
        //   setModalVisible(!ModalVisible)
        // }}
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

        {
          atividadesConcluidas.map((att, index) => {
            return (
              <View key={index}>
                <View style={styles.atividadeCard}>
                  <View style={styles.cardHeader}>
                  </View>
                  <View style={styles.cardBody}>
                    <Text style={styles.title}>{att.nome}</Text>
                    <Text>{att.turma.nome}</Text>
                    {att.atividades_concluidas.map((t, index) => {
                      // var arquivo = t.arquivo;
                      // var aluno = t.aluno.nome;
                      <Modal visible={modalVisible}>
                        <AttAluno key={index} item={t} />
                      </Modal>
                      // ativadadeBaixar(arquivo, aluno)
                    })}
                  </View>
                </View>
              </View>
            )
          })
        }
      </View>
    </View>
  )
}

// return (
//   <View>
//     <FlatList
//       data={atividadesConcluidas}
//       renderItem={renderAtividadeItem}
//       keyExtractor={(item) => item.id.toString()}
//     />
//     <Button title="Voltar" onPress={() => window.location.href = "../professoresHome/index.html"} />
//   </View>
// );