import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, TouchableOpacity, View, Linking } from "react-native";
import styles from "./style";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const Atividade = ({ item }) => {
  
  const enviarPg = async (id) => {
    const url =
      "http://127.0.0.1:5500/Mobile/ClassQuest/src/pages/pag/upload.html?id="+id;
    await Linking.openURL(url);
  };

  return (
    <View style={styles.txtAtt}>
      <TouchableOpacity onPress={() => enviarPg(item.id_atividade)}>
        <Text>Nome: {item.titulo}</Text>
        <Text>Descrição: {item.descricao}</Text>
        <Text>Pontos de conclusão: {item.pontos_conclusao} pontos</Text>
        <Text>
          Prazo: {format(new Date(item.prazo), "dd/MM/yyyy", { locale: ptBR })}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Atividade;
