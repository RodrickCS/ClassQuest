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
import moment from "moment";
import styles from "./style";

export default function Professor({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [Nome, setNome] = useState("");
  const [info, setInfo] = useState({ turma: [] });
  const [myInterval, setMyInterval] = useState(null);
  const [ModalShow, setModalShow] = useState(false);
  const [id_turma, setId_turma] = useState(0);
  const [titulo, setTitulo] = useState("coisa");
  const [descricao, setDescricao] = useState("coisinha");
  const [pontos_conclusao, setPontos_conclusao] = useState(10);
  const [date, setDate] = useState("23/05/2023");
  const [time, setTime] = useState("17:50");

  useEffect(() => {
    dados();
  }, []);

  const menu = () => {
    clearInterval(myInterval);
    navigation.openDrawer();
  };

  const voltar = () => {
    clearInterval(myInterval);
    navigation.navigate("Login");
  };
  async function dados() {
    try {
      const userString = await AsyncStorage.getItem("nome");
      if (userString) {
        const user = JSON.parse(userString);
        const idzinho = user.id_prof;
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

  async function criarRecurso() {
    try {
      const userString = await AsyncStorage.getItem("nome");
      const user = JSON.parse(userString);
      const id_prof = user.id_prof;
      let token = await AsyncStorage.getItem("token");

      const responsePost = await fetch("http://localhost:3000/turmas/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.split('"')[1]
        },
        body: JSON.stringify({
          nome: Nome
        })
      });

      if (responsePost.ok) {
        const dataPost = await responsePost.json();
        const resourceId = dataPost.id_turma;

        const responsePut = await fetch(
          `http://localhost:3000/turmas/adicionarProfessor/${resourceId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token.split('"')[1]
            },
            body: JSON.stringify({
              id_prof: id_prof
            })
          }
        );

        if (responsePut.ok) {
          const dataPut = await responsePut.json();
          console.log("Recurso atualizado:", dataPut);
          setModalVisible(false);
          dados();
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
            setNome(val);
          }}
          autoFocus={true}
          keyboardType="default"
          style={styles.inputzinho}
        ></TextInput>
        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.sairBotao}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={styles.txtFechar}>Fechar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.okBotao}
            onPress={() => {
              criarRecurso();
            }}
          >
            <Text style={styles.txtOk}>Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ModalAtt = () => {
    return (
      <View style={{ ...styles.divin, display: ModalShow ? "flex" : "none" }}>
        <ImageBackground
          source={require("../../../../assets/fundo.jpg")}
          resizeMode="cover"
          style={styles.imagem}
        ></ImageBackground>
        <View style={{ flexDirection: "row", paddingBottom: "5px" }}>
          <View>
            <Text style={styles.titulo}>Criar atividade: </Text>
            <Text>Titulo:</Text>
            <TextInput
              style={styles.inputzinho}
              keyboardType="default"
              onChangeText={(val) => {
                setTitulo(val);
              }}
              value={titulo}
            />

            <Text>Descrição:</Text>
            <TextInput
              style={styles.inputzinho}
              keyboardType="default"
              value={descricao}
              onChangeText={(val) => {
                setDescricao(val);
              }}
            />

            <Text>Prazo:</Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                style={styles.inputzinho}
                placeholder="dd/mm/aaaa"
                onChangeText={(text) => {
                  setDate(text);
                }}
                value={date}
              />
              <TextInput
                style={styles.inputzinho}
                placeholder="hh:mm"
                onChangeText={(text) => {
                  setTime(text);
                }}
                value={time}
              />
            </View>

            <Text>Pontos de conclusão:</Text>
            <TextInput
              style={styles.inputzinho}
              keyboardType="numeric"
              onChangeText={(val5) => {
                setPontos_conclusao(val5);
              }}
              value={pontos_conclusao}
            />
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  margin: "25px",
                  padding: "15px",
                  backgroundColor: "#0f0",
                  borderRadius: "10px"
                }}
                onPress={() => {
                  criarAtt();
                }}
              >
                <Text>Enviar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  margin: "25px",
                  padding: "15px",
                  backgroundColor: "#f00",
                  borderRadius: "10px"
                }}
                onPress={() => {
                  setModalShow(false);
                }}
              >
                <Text>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const criarAtt = async () => {
    const formattedDate = moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const formattedTime = moment(time, 'HH:mm').format('HH:mm:ss.SSS');
    const prazo = `${formattedDate}T${formattedTime}Z`;
  
    try {
      let token = await AsyncStorage.getItem("token");
      fetch("http://localhost:3000/atividades/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token.split('"')[1]
        },
        body: JSON.stringify({
          id_turma: id_turma,
          titulo: titulo,
          descricao: descricao,
          prazo: prazo,
          pontos_conclusao: pontos_conclusao
        })
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log("Atividade criada:", data);
          setModalShow(false);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} transparent>
        <ModalContent />
      </Modal>
      <Modal visible={ModalShow}>
        <ModalAtt />
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
            setModalVisible(true);
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
              <TouchableOpacity
                onPress={() => {
                  setId_turma(att.id_turma);
                  setModalShow(true);
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
