import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // alignItems: 'center',
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
  image2: {
    width: '15px',
    height: '15px',
    margin: '5px'
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
  },
  turmas:{
    flexDirection: 'row',
    display: 'flex',
    flexWrap: 'wrap'
  },
});