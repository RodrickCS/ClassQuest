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
    backgroundColor: "#f00",
    boxShadow:'10px 5px 5px black',
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
  image: {
    width: '25vw',
    height: '15vh',
  },
  txtErr: {
    color: 'red'
  }
});