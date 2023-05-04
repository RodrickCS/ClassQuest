import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titulo: {
        color: '#3a3',
        fontSize: '25pt',
        marginLeft: '30vw',
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
        // backgroundColor: '#6fddeb',
        alignItems: 'center',
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
    },
    imagem: {
        flex: 2,
        width: 400,
        height: 700,
        justifyContent: 'center',
    },
    buttonzinho: {
        backgroundColor: "#0f0",
        borderRadius: '10px',
        padding: '10px',
        justifyContent: 'flex-end',
    },
    txtbutton: {
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: '15pt',
    }
});