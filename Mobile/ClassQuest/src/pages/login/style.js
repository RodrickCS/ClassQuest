import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  imagem: {
    flex: 2,
    width: 400, 
    height: 700,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    margin: '10px',
  },
  titulo: {
    color: "#15f",
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '20pt',
    padding: '20px',
  },
  inputzinho: {
    margin: '5px',
    backgroundColor: "#eef",
    borderRadius: '10px',
  },
  divInputzinho: {
    padding: '10vh',
  },
  buttonzinho: {
    backgroundColor: "#f00",
    // width: '30vw',
    // boxShadow: '5px 1px 1px black',
    borderRadius: '10px',
    padding: '10px',
  },
  txtbutton: {
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '15pt',
  },
  txtCad: {
    color: "#0000FF",
    textDecorationLine: 'underline',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '10pt',
    // paddingBottom:'10px',
  },
  divInputzinho: {
    marginBottom: '5vh',
  },
  imagenzinha: {
    alignItems: 'center',
    marginBottom: '5vh',
    padding: '5vh',
  },
  txtAbaixo: {
    paddingTop: '10px',
    // color: "#bbb",
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '10pt',
  },
  label: {
    padding: '10px',
    marginBottom: '5px',
    // color: "#bbb",
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '10pt',
  },
  image: {
    width: '80vw',
    height: '15vh',
  },
  txtErr: {
    color: 'red',
  }
});