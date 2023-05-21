import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    width: '10px',
    height: '10px',
    margin: '5px',
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
    paddingRight: '15px',
    textShadow: '1px 1px 1px #000',
  },
  txtSair: {
    color: '#f00',
    fontSize: '12pt',
    padding: '15px',
    textShadow: '1px 1px 1px #000',
  },
  dados: {
    margin: '10px',
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
  }
});