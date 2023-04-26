import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imagem: {
    flex: 2,
    width: 400,
    height: 800,
  },
  image: {
    width: '49px',
    height: '50px',
    // padding: '15px',
  },
  divizinha: {
    // width: '95%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '5px',
    backgroundColor: '#6fddeb',
    // borderRadius: '12px',
    margin: '10px',
  },
  txtEntrar: {
    color: '#ddd',
    fontSize: '15pt',
    // paddingLeft: '25px',
    paddingRight: '15px',
    textShadow: '1px 1px 1px #000',
  },
  txtSair: {
    color: '#f00',
    fontSize: '12pt',
    padding: '15px',
    // marginRight: '35px',
    textShadow: '1px 1px 1px #000',
    // padding: '15px',
  }
});