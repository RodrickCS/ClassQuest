// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
// import { useState, useEffect } from "react";
// import styles from "./style";
// import CardPerfilAluno from '../../../components/cardPerfilAluno/cardPerfilAluno'

// export default function PerfilAluno({ navigation }) {

//   const [info, setInfo] = useState([{}]);
//   const [myInterval, setMyInterval] = useState(null)

//   useEffect(() => {
//     dados();
//     // setMyInterval(setInterval(() => {
//     //   dados();
//     // }, 5000));
//   }, []);

//   const menu = () => {
//     clearInterval(myInterval);
//     navigation.openDrawer();
//   };

//   const voltar = () => {
//     clearInterval(myInterval);
//     navigation.navigate("Login");
//   };

//   async function dados() {
//     try {
//       const userString = await AsyncStorage.getItem("nome");
//       if (userString) {
//         const user = JSON.parse(userString);
//         const id_aluno = user.id_aluno;
//         fetch("http://localhost:3000/premios/readOne/" + id_aluno)
//           .then((resp) => {
//             return resp.json();
//           })
//           .then((data) => {
//             setInfo(data);
//             console.log(data);
//           });
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   return (
//     <View>
//       <ImageBackground source={require("../../../../assets/fundo.jpg")} resizeMode="cover" style={styles.imagem}></ImageBackground>
//       <View style={styles.divizinha}>
//         <TouchableOpacity onPress={() => { menu() }}>
//           <Image style={styles.image} source={require("../../../../assets/favicon.png")} />
//         </TouchableOpacity>
//         <Text style={styles.txtEntrar}>Perfil</Text>
//         <Text style={styles.txtSair} onPress={() => { voltar() }}>Sair</Text>
//       </View>
//       <View style={styles.dados}>
//         {info.map((item, index) => {
//           return (
//           <View key={index}>
//             <TouchableOpacity style={styles.turma}>
//               <Text>{item.descricao}</Text>
//               <Text>{item.pontos_requeridos}</Text>
//             </TouchableOpacity>
//           </View>
//           );
//         })}
//       </View>
//     </View>
//   );
// }


import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, Image, ImageBackground } from "react-native";
import { useState, useEffect } from "react";
import styles from "./style";
import CardPerfilAluno from '../../../components/cardPerfilAluno/cardPerfilAluno'

export default function PerfilAluno({ navigation }) {

  const [info, setInfo] = useState(null);

  useEffect(() => {
    dados();
  }, []);

  const menu = () => {
    navigation.openDrawer();
  };

  const voltar = () => {
    navigation.navigate("Login");
  };

  async function dados() {
    try {
      const userString = await AsyncStorage.getItem("nome");
      if (userString) {
        const user = JSON.parse(userString);
        const id_aluno = user.id_aluno;
        const response = await fetch("http://localhost:3000/premios/readOne/" + id_aluno);
        const data = await response.json();
        setInfo(data);
        console.log(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <View>
      <ImageBackground source={require("../../../../assets/fundo.jpg")} resizeMode="cover" style={styles.imagem}></ImageBackground>
      <View style={styles.divizinha}>
        <TouchableOpacity onPress={menu}>
          <Image style={styles.image} source={require("../../../../assets/favicon.png")} />
        </TouchableOpacity>
        <Text style={styles.txtEntrar}>Perfil</Text>
        <Text style={styles.txtSair} onPress={voltar}>Sair</Text>
      </View>
      <View style={styles.dados}>
        {info.length > 0 ? (
          <Image style={styles.image} source={require("../../../../assets/favicon.png")} />
        ) : (
          info.map((item, index) => (
            <View key={index}>
                <Text>{item.descricao}</Text>
                <Text>{item.pontos_requeridos}</Text>
            </View>
          ))
        )}
      </View>
    </View>
  );
}
