import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "./style";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const cardAttAluno = ({ item }) => {

  return (
    <View>
      <TouchableOpacity>
        <Text>Nome: {item.aluno.nome}</Text>
        <Text>Descrição: {item.arquivo}</Text>
        <TouchableOpacity 
        // onPress={}
        > 
          {/* <Image/> */}
        </TouchableOpacity>
        <Text>
          Entrega: {format(new Date(item.prazo), "dd/MM/yyyy - HH:mm", { locale: ptBR })}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default cardAttAluno;
