import { Text, Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import styles from "./style";

const CardPerfilAluno = ({ item }) => {
  const [setinhaCima, setSetinhaCima] = useState(0);
  const [showModal, setShowModal] = useState(false)

  const images = [
    require("../../../assets/setaBaixo.png"),
    require("../../../assets/setaCima.png")
  ];

  function opcoes() {
    setSetinhaCima((prevImage) => (prevImage + 1) % images.length);
    setShowModal(!showModal)
  }

  return (
    <View style={{marginBottom: '10px', backgroundColor: '#ddd', borderRadius: '10px'}}>
      <TouchableOpacity style={styles.turma} onPress={opcoes}>
        <Image
          style={styles.image}
          source={require("../../../assets/favicon.png")}
        />
        <Text>{item.nome}</Text>
        <Image source={images[setinhaCima]} style={styles.image2} />
      </TouchableOpacity>
      <View style={{...styles.divTxtAtt, display: showModal ? 'flex' : 'none'}}>
        {item.atividades.map((a, index) => {
          return (
            <View style={styles.txtAtt} key={index}>
              <Text>Nome: {a.titulo}</Text>
              <Text>Descrição: {a.descricao}</Text>
              <Text>Pontos de conclusão: {a.pontos_conclusao} pontos</Text>
              <Text>Prazo: { a.prazo.toLocaleString("pt-BR", { timeZone: "UTC" }).split("T")[0]}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CardPerfilAluno;
