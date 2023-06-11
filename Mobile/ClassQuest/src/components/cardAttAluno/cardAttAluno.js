// import { useState, useEffect } from "react";
// import { Text, TouchableOpacity, View, Image } from "react-native";
// // import styles from "./style";
// import { format } from "date-fns";
// import { ptBR } from "date-fns/locale";

// const cardAttAluno = ({ t }) => {
//   // const handleAtribuirPontos = (idAluno, idTurma) => {
//   //   fetch("http://localhost:3000/pontos/addPoints/"+ id)
//   //     .then(resp => resp.json())
//   //     .then(data => {
//   //       console.log(data);
//   //     })
//   //     .catch(error => {
//   //       console.error("Erro ao obter atividades concluídas:", error);
//   //     });
//   // };

//   return (
//     <View>
//       <TouchableOpacity>
//         <Text>Nome: {t.aluno.nome}</Text>
//         <Text>Descrição: {t.arquivo}</Text>
//         <Text>add pontos {t.arquivo}</Text>
//         {/* <TouchableOpacity 
//         // onPress={}
//         > 
//           //  <Image/> 
//         </TouchableOpacity>
//         <Text>
//           Entrega: {format(new Date(t.prazo), "dd/MM/yyyy - HH:mm", { locale: ptBR })}
//         </Text> */}
//       </TouchableOpacity>
//     </View>
//   );
// };


import { Text, Image, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import styles from "./style";
import Atividade from "../atividade/atividade";

const cardAttAluno = ({ t }) => {
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
        {t.atividades.map((t, index) => {
          return <Atividade key={index} item={t} />;
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
        <Text>Nome: {t.aluno.nome}</Text>
        <Text>Descrição: {t.arquivo}</Text>
        <Image source={images[setinhaCima]} style={styles.image2} />
      </TouchableOpacity>
      <ModalContent />
    </View>
  );
};

export default cardAttAluno;
