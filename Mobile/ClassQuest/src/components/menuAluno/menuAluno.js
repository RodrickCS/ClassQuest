import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, Image } from 'react-native';

import { Ionicons } from '@expo/vector-icons';



const Drawer = createDrawerNavigator();

import Professor from '../../pages/professorHome/professorHome';
import Aluno from '../../pages/alunoHome/alunoHome';

export default function Menu({ navigation }) {
    var user = JSON.parse(localStorage.getItem('nome'))
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>

            <Drawer.Screen name="Professor" detachInactiveScreens={true} component={Professor}
                options={{
                    drawerLabel: (() => <Text style={{ margin: '0px', borderEndColor: 'black' }}>Olá, {user.nome} </Text>),
                }}>
            </Drawer.Screen>
            <Drawer.Screen name="Home" component={Aluno}
                options={{
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#000' : '#aaa' }}>Home</Text>),
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                      ),
                }}>
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}