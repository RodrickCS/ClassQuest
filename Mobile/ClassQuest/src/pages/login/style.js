import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:'50px',
    justifyContent: 'center',
  },
  titulo: {
    color: "#15f",
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '20pt',
    padding: '20px'
  },
  inputzinho: {
    width: '50vw',
    margin: '5px',
    backgroundColor: "#eef",
    borderRadius: '10px'
  },
  divInputzinho: {
    alignItems: 'center'
  },
  buttonzinho: {
    backgroundColor: "#1df",
    borderRadius: '10px',
    padding: '10px'
  },
  txtbutton: {
    color: "#fff",
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '15pt'
  },
  txtErr: {
    color: 'red'
  }
});