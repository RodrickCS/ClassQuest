import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

import Perfil from '../../pages/Aluno/perfilAluno/perfilAluno';
import Aluno from '../../pages/Aluno/alunoHome/alunoHome';
import Atividades from '../../pages/Aluno/atividades/atividades';

export default function Menu({ navigation }) {

    var user = JSON.parse(localStorage.getItem('nome'))

    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} 
        initialRouteName='Atividades'
        >
            <Drawer.Screen name="Perfil" component={Perfil}
                options={{
                    drawerLabel: (() => <Text> Olá, {user.nome}</Text>),
                }}>
            </Drawer.Screen>
            <Drawer.Screen name="Home" component={Aluno}
                options={{
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#000' : '#aaa' }}>Home</Text>),
                    drawerIcon: ({ focused, color, size }) => (<Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />),
                }}>
            </Drawer.Screen>
            <Drawer.Screen name="Atividades" component={Atividades}
                options={{
                    drawerLabel: (({ focused }) => <Text style={{ color: focused ? '#000' : '#aaa' }}>Atividades</Text>),
                    drawerIcon: ({ focused, color, size }) => (<Ionicons name={focused ? 'create' : 'create-outline'} size={size} color={color} />),
                }}>
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}