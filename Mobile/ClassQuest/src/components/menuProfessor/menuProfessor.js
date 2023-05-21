import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

import Perfil from '../../pages/Professor/perfilProf/perfilProf';
import Professor from '../../pages/Professor/professorHome/professorHome';


export default function Menu({ navigation }) {

    var user = JSON.parse(localStorage.getItem('nome'))
    
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}
        // initialRouteName='Professor'
        >
            <Drawer.Screen name="Perfil" component={Perfil}
                options={{
                    drawerLabel: (() => <Text> Olá, 
                        {/* {user.nome} */}
                         </Text>),
                }}>
            </Drawer.Screen>
            <Drawer.Screen name="Professor" component={Professor}
                options={{
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#000' : '#aaa' }}>Home</Text>),
                    drawerIcon: ({ focused, color, size }) => (<Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />),
                }}>
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}