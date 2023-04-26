import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: '10px',
    // flex: 1,
  },
  imagem: {
    flex: 2,
    width: 400,
    height: 800,
  },
  image: {
    width: '49px',
    height: '50px',
  },
  divizinha: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '5px',
    backgroundColor: '#6fddeb',
    borderRadius: '12px',
    margin: '10px',
  },
  txtEntrar: {
    color: '#ddd',
    fontSize: '15pt',
    textShadow: '1px 1px 1px #000',
  },
  txtSair: {
    color: '#f00',
    fontSize: '12pt',
    marginRight: '5px',
    textShadow: '1px 1px 1px #000',
  }
});