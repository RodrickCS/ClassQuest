import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: '25pt',
        marginLeft: '30vw',
        color: '#ddd',
        paddingRight: '15px',
        textShadow: '1px 1px 1px #000',
    },
    divizinha: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '5px',
        backgroundColor: '#6fddeb',
    },
    dados: {
        padding: '15px',
    },
    cadastro: {
        padding: '15px',
        alignItems: 'center',
    },
    inputzinho: {
        margin: '5px',
        padding: '5px',
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
    textinho: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    label: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '10pt',
    },
    imagem: {
        flex: 2,
        width: 390,
        height: 900,
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
    }, 
    modal: {
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    modalTotal: {
        marginTop:'250px',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: 10,
        padding: 20,
    },
    txtFechar: {
        color: '#f00',
        fontSize: '12pt',
    },
    txtOk: {
        color: '#FFF',
        fontSize: '12pt',
    },
    sairBotao:{
        backgroundColor: "#ddd",
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
    },
    okBotao:{
        backgroundColor: "#0f0",
        borderRadius: '10px',
        padding: '10px',
        margin: '10px',
        textAlign: 'center'
    },
    botoes:{
        flexDirection: 'row'
    },
    txtCad:{
        color: '#FFF',
        fontSize: '12pt',
    }
});