import { Text, View } from "react-native";
import styles from "./style";

const Atividade = ({ item }) => {
  return (
    <View style={styles.txtAtt}>
      <Text>
        Nome: {item.titulo}
      </Text>
      <Text>
        Descrição: {item.descricao}
      </Text>
      <Text>
        Pontos de conclusão: {item.pontos_conclusao} pontos
      </Text>
      <Text>
        Prazo: {item.prazo.toLocaleString("pt-BR", { timeZone: "UTC" }).split("T")[0]}
      </Text>
    </View>
  );
};

export default Atividade;
