import { Text, Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import styles from "./style";
import Atividade from "../atividade/atividade";

const CardPerfilAluno = ({ item }) => {
  const [setinhaCima, setSetinhaCima] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const images = [
    require("../../../assets/setaBaixo.png"),
    require("../../../assets/setaCima.png")
  ];

  function opcoes() {
    setSetinhaCima((prevImage) => (prevImage + 1) % images.length);
    setShowModal(!showModal);
  }

  const ModalContent = () => {
    return (
      <View style={{ ...styles.divTxtAtt, display: showModal ? "flex" : "none" }}>
        {item.atividades.map((a, index) => {
          return <Atividade key={index} item={a} />;
        })}
      </View>
    );
  };

  return (
    <View>
      <TouchableOpacity style={styles.turma} onPress={opcoes}>
        <Image
          style={styles.image}
          source={require("../../../assets/favicon.png")}
        />
        <Text>{item.nome}</Text>
        <Image source={images[setinhaCima]} style={styles.image2} />
      </TouchableOpacity>
      <ModalContent/>
    </View>
  );
};

export default CardPerfilAluno;
