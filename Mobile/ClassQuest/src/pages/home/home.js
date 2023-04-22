import { View, Text, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from '../home/style'

export default function Home({ navigation }) {

    return (
        <View>
            <TouchableOpacity>
                {/* <Image style={styles.image} source={require('../../../assets/favicon.png')} /> */}
            </TouchableOpacity>
            <View style={styles.divizinha}>
                <TouchableOpacity>
                    <Text style={styles.txtSair}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}