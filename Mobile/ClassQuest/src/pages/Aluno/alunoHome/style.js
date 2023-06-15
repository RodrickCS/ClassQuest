import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},
  imagem: {
    flex: 2,
    width: 390,
    height: 900,
  },
  image: {
    width: '49px',
    height: '50px',
  },
  image2: {
    width: '15px',
    height: '15px',
    margin: '5px',
  },
  divImage2:{
    position: 'absolute',
    right: 0,
    top: 0
  },
  divizinha: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#6fddeb',
    margin: '10px',
    borderRadius: '10px'
  },
  txtEntrar: {
    color: '#ddd',
    fontSize: '15pt',
    paddingBottom: '5px',
    paddingLeft: '5px',
    textShadow: '1px 1px 1px #000',
  },
  txtSair: {
    color: '#f00',
    fontSize: '12pt',
    padding: '15px',
    textShadow: '1px 1px 1px #000',
  },
  turma:{
    backgroundColor: '#6fddeb',
    padding: '24px',
    borderRadius: '10px',
    margin: '10px',
    width: 'max-content'
  },
  turmas:{
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    padding: '5px',
  }, 
  inputzinho: {
    margin: '5px',
    padding: '5px',
    backgroundColor: "#eef",
    borderRadius: '10px',
},
    modal: {
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    modalTotal: {
        marginTop:'250px',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 10,
        padding: 20,
    },
    txtFechar: {
        color: '#f00',
        fontSize: '12pt',
    },
    txtOk: {
        color: '#FFF',
        fontSize: '12pt',
    },
    sairBotao:{
        backgroundColor: "#ddd",
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
    },
    okBotao:{
        backgroundColor: "#0f0",
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center'
    },
    botoes:{
        flexDirection: 'row'
    },
    txtCad:{
        color: '#FFF',
        fontSize: '12pt',
    }, 
    txtSairTurma: {
      color: '#f00',
      // fontSize: '12pt',
      // padding: '15px',
      position: 'absolute',
      backgroundColor: '#fff',
      // display: 'inline',
      marginStart: "20px",
    },
});