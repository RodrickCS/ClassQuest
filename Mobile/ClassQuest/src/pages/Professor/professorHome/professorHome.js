import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import styles from "./style";

export default function Professor({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAluno, setModalAluno] = useState(false);
  const [Nome, setNome] = useState("");
  const [Codigozinho, setNomezinho] = useState("asdf");
  const [info, setInfo] = useState({ turma: [] });
  const [myInterval, setMyInterval] = useState(null);
  const [id_turma, setId_turma] = useState();
  const [id_prof, setId_prof] = useState();

  const menu = () => {
    clearInterval(myInterval);
    navigation.openDrawer();
  };

  const voltar = () => {
    clearInterval(myInterval);
    navigation.navigate("Login");
  };

  useEffect(() => {
    dados();
  }, []);

  async function dados() {
    try {
      const userString = await AsyncStorage.getItem("nome");
      if (userString) {
        const user = JSON.parse(userString);
        const idzinho = user.id_prof
        setId_prof(idzinho);
        fetch("http://localhost:3000/professores/readOne/" + idzinho)
          .then((resp) => resp.json())
          .then((data) => {
            setInfo(data);
          });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  //   async function CriarTurma() {
  //     try {
  //       let token = await AsyncStorage.getItem("token");
  //       console.log(token);

  //       fetch("http://localhost:3000/turmas/create", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + token.split('"')[1]
  //         },
  //         body: JSON.stringify({
  //           nome: Nome
  //         })
  //       })
  //         .then((resp) => resp.json())
  //         .then((data) => {
  //           setInfo(data);
  //           setId_turma(data.id_turma);

  //           fetch("http://localhost:3000/turmas/adicionarProfessor/" + data.id_turma, {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: "Bearer " + token.split('"')[1]
  //             },
  //             body: JSON.stringify({
  //               id_prof: id_prof
  //             })
  //           })
  //             .then((resp) => resp.json())
  //             .then((data) => {
  //               console.log(data);
  //             });
  //         });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }

  //   function listarAlunos() {
  //     fetch("http://localhost:3000/turmas/readAluno")
  //       .then((resp) => {
  //         return resp.json();
  //       })
  //       .then((data) => {
  //         setInfo(data);
  //         console.log(data);
  //       });
  //   }

  const ModalContent = () => {
    return (
      <View style={styles.modalTotal}>
        <Text style={styles.txtCad}>Digite o nome da turma:</Text>
        <TextInput
          value={Nome}
          onChangeText={(val) => {
            setNome(val);
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
              CriarTurma();
            }}
          >
            <Text style={styles.txtOk}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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
  //     );
  //   };

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
            menu();
          }}
        >
          <Image
            style={styles.image}
            source={require("../../../../assets/favicon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <Text style={styles.txtEntrar}> Criar uma turma </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            voltar();
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
              style={{alignItems: 'center'}}
                onPress={() => {
                  setModalAluno(!modalAluno);
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
          );
        })}
      </View>
    </View>
  );
}
