import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        color: '#3a3',
        fontSize: '25pt',
        marginLeft: '30vw',
    },
    image: {
        width: '25vw',
        height: '15vh',
    },
    divizinha: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '5px',
        backgroundColor: '#6fddeb',
    },
    dados: {
        padding: '15px',
        backgroundColor: '#6fddeb',
    },
    inputzinho: {
        margin: '5px',
        backgroundColor: "#eef",
        borderRadius: '10px',
      },
      divInputzinho: {
        padding: '10vh',
      },
    txtSair: {
        color: '#f00',
        fontSize: '12pt',
        marginLeft: '10px'
    }
});