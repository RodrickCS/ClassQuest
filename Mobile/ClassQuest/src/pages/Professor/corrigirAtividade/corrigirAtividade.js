// import AsyncStorage from "@react-native-async-storage/async-storage"
// import { useState, useEffect } from "react"
// import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native"
// import styles from "./style"

// export default function Atividades({ navigation }) {
//   const [info, setInfo] = useState({ turma: [] })
//   const [myInterval, setMyInterval] = useState(null)

//   useEffect(() => {
//     atividades()
//     setMyInterval(setInterval(() => {
//       atividades()
//     }, 5000))
//   }, [])

//   const menu = () => {
//     clearInterval(myInterval)
//     navigation.openDrawer()
//   }

//   const voltar = () => {
//     clearInterval(myInterval)
//     navigation.navigate("Login")
//   }

//   function atividades() {
//     fetch("http://localhost:3000/atividades/read")
//       .then((resp) => resp.json())
//       .then((data) => {
//         setInfo(data)
//       })
//   }
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
//   fetch("https://classquest.blob.core.windows.net/data/" + arquivo)

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={require("../../../../assets/fundo.jpg")}
//         resizeMode="cover"
//         style={styles.imagem}
//       ></ImageBackground>
//       <View style={styles.divizinha}>
//         <TouchableOpacity
//           style={styles.imagenzinha}
//           onPress={() => {
//             menu()
//           }}
//         >
//           <Image
//             style={styles.image}
//             source={require("../../../../assets/favicon.png")}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => {
//             criarAtt()
//           }}>
//         <Text style={styles.txtEntrar}>Criar as atividades</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => {
//             voltar()
//           }}
//         >
//           <Text style={styles.txtSair}>Sair</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   )
// }
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Button } from 'react-native';

const [atividadesConcluidas, setAtividadesConcluidas] = useState([]);
const uriReadAtividadesConcluidas = "http://localhost:3000/atividades/viewAtividades";
const uriAddPoints = "http://localhost:3000/pontos/addPoints/";

useEffect(() => {
  fetchAtividadesConcluidas();
}, []);


export default function Atividades({ navigation }) {

  const fetchAtividadesConcluidas = () => {
    fetch(uriReadAtividadesConcluidas)
      .then(resp => resp.json())
      .then(data => {
        setAtividadesConcluidas(data);
      })
      .catch(error => {
        console.error("Erro ao obter atividades concluídas:", error);
      });
  };

  // const { titulo, turma, atividades_concluidas } = item;
  const aluno = atividades_concluidas[0].aluno;

  const baixarArquivo = (arquivo) => {
    const azureUrl = `https://classquest.blob.core.windows.net/data/${arquivo}`;
  };

  const handleAtribuirPontos = (idAluno, idTurma) => {
    fetch(uriAddPoints)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error("Erro ao obter atividades concluídas:", error);
      });
  };
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

        {
          atividadesConcluidas.map((att, index) => {
            return (
              <TouchableOpacity
              // onPress={() => preencherInfoAtividade}
              >
                <View style={styles.atividadeCard}>
                  <View style={styles.cardHeader}>
                    <Image
                      style={styles.image}
                      source={require("../../../../assets/favicon.png")}
                    />
                  </View>
                  <View style={styles.cardBody}>
                    <Text style={styles.title}>{titulo} - {turma.nome}</Text>
                    <Text style={styles.nomeAluno}>{aluno.nome}</Text>
                  </View>
                </View>
              </TouchableOpacity>
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


const styles = {
  atividadeCard: {
    backgroundColor: "#FFFFFF",
    height: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  cardHeader: {
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cardImg: {
    width: 90,
  },
  cardBody: {
    flex: 1,
    display: "flex",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#19dde0",
    borderRadius: 12,
    padding: 12,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nomeAluno: {
    fontSize: 16,
    marginTop: 8,
  },
};