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
    margin: '5px',
    marginEnd: '10px'
  },
  image2: {
    width: '10px',
    height: '10px',
    margin: '5px',
    position: 'absolute',
    right: 0,
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
  turma: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: '5px',
    borderRadius: '10px',
    backgroundColor: '#fff',
  },

  coisinhas: {
    flexDirection: 'row',
  },
  botaozinho: {
    backgroundColor: "#0f0",
    borderRadius: '10px',
    padding: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtbutton: {
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '15pt',
  }
});