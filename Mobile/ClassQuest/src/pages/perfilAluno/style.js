import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imagem: {
    flex: 2,
    width: 390,
    height: 900,
  },
  image: {
    width: '49px',
    height: '50px',
  },
  divizinha: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '5px',
    backgroundColor: '#6fddeb',
    margin: '10px',
  },
  txtEntrar: {
    color: '#ddd',
    fontSize: '15pt',
    paddingRight: '15px',
    textShadow: '1px 1px 1px #000',
  },
  txtSair: {
    color: '#f00',
    fontSize: '12pt',
    padding: '15px',
    textShadow: '1px 1px 1px #000',
  },
  dados:{
    backgroundColor: '#6fddeb',
    margin: '10px',
  },
  inputzinho: {
    height:'5px',
    margin: '10px',
    width:'45%',
    backgroundColor: "#eef",
    borderRadius: '10px',
},
coisinhas:{
  flexDirection: 'row',
},
botaozinho: {
  backgroundColor: "#0f0",
  borderRadius: '10px',
  padding: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  // width:'60px'
},
txtbutton: {
  color: "#fff",
  fontWeight: 'bold',
  textAlign: 'center',
  justifyContent: 'center',
  fontSize: '15pt',
}
});